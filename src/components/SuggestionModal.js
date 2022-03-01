import {
  SuggestionModalStyled,
  SuggestionsModalContainer,
  EditFeedbackButton,
  SuggestionsModalHeader,
} from "./styles/SuggestionModalStyled";

import { BackBtn } from "./styles/FeedbackModalStyled";

import { ReactComponent as BackSvg } from "../assets/shared/icon-arrow-left.svg";
import SuggestionBox from "./SuggestionBox";

import { useContext, useState } from "react";
import { DataContext } from "../components/store/data-context";

import CommentsComponent from '../components/CommentsComponent';
import AddComment from "./AddComment";
import EditFeedback from "./EditFeedback";

export default function SuggestionModal(props) {

    const [feedbackModalActive, setFeedbackModalActive] = useState(false);
    const [hideCommentsBox, setHideCommmentsBox] = useState(false);

    const ctx = useContext(DataContext);
    let suggestion;

    ctx.data.map((request => {
        if (request.id == props.id) {
            suggestion = request;
        }
    }))


  function backButtonHandler() {
    props.suggestionModalBackButtonHandler();
  }

  function suggestionBoxClickHandler() {
  }

  function upvoteClickHandler(id) {
    ctx.upVote(id);
  }

  function editFeedbackBtnHandler() {
    setFeedbackModalActive(true);
    setHideCommmentsBox(true);
  }

  function editFeedbackBackButtonHandler() {
    setFeedbackModalActive(false);
    setHideCommmentsBox(false);
  }


  function editFeedbackHandler(newFeedback) {
    ctx.editFeedback(newFeedback);
  }

  function deleteFeedbackHandler(id) {
    ctx.deleteFeedback(id);
  }

  function deleteBackButtonHandler() {
    props.suggestionModalBackButtonHandler();
    setFeedbackModalActive(false);
    setHideCommmentsBox(false);
  }

  return (
    <SuggestionModalStyled modalActive={props.modalActive}>
      <SuggestionsModalContainer>
        <SuggestionsModalHeader>
          <BackBtn onClick={backButtonHandler}>
            <BackSvg />
            <p>Go Back</p>
          </BackBtn>
          <EditFeedbackButton onClick={editFeedbackBtnHandler}>Edit Feedback</EditFeedbackButton>
        </SuggestionsModalHeader>
        {props.id && <SuggestionBox suggestionBoxClickHandler={suggestionBoxClickHandler} upvoteClickHandler={upvoteClickHandler} modal={true} suggestion={suggestion}></SuggestionBox>}
        {props.id && <CommentsComponent hide={hideCommentsBox} suggestion={suggestion}></CommentsComponent>}
        <AddComment suggestion={suggestion}></AddComment>
      </SuggestionsModalContainer>
      {props.id && <EditFeedback deleteBackButtonHandler={deleteBackButtonHandler} deleteFeedback={deleteFeedbackHandler} editFeedback={editFeedbackHandler} backButtonHandler={editFeedbackBackButtonHandler} suggestion={suggestion} modalActive={feedbackModalActive}></EditFeedback>}
    </SuggestionModalStyled>
  );
}
