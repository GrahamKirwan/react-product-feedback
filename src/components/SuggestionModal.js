import {
  SuggestionModalStyled,
  SuggestionsModalContainer,
  EditFeedbackButton,
  SuggestionsModalHeader,
} from "./styles/SuggestionModalStyled";

import { BackBtn } from "./styles/FeedbackModalStyled";

import { ReactComponent as BackSvg } from "../assets/shared/icon-arrow-left.svg";
import SuggestionBox from "./SuggestionBox";

import { useContext } from "react";
import { DataContext } from "../components/store/data-context";

import CommentsComponent from '../components/CommentsComponent';
import AddComment from "./AddComment";

export default function SuggestionModal(props) {

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

  return (
    <SuggestionModalStyled modalActive={props.modalActive}>
      <SuggestionsModalContainer>
        <SuggestionsModalHeader>
          <BackBtn onClick={backButtonHandler}>
            <BackSvg />
            <p>Go Back</p>
          </BackBtn>
          <EditFeedbackButton>Edit Feedback</EditFeedbackButton>
        </SuggestionsModalHeader>
        {props.id && <SuggestionBox suggestionBoxClickHandler={suggestionBoxClickHandler} upvoteClickHandler={upvoteClickHandler} modal={true} suggestion={suggestion}></SuggestionBox>}
        {props.id && <CommentsComponent suggestion={suggestion}></CommentsComponent>}
        <AddComment suggestion={suggestion}></AddComment>
      </SuggestionsModalContainer>
    </SuggestionModalStyled>
  );
}
