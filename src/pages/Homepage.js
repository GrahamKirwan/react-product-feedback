import Sidebar from '../components/layout/Sidebar';
import Suggestions from '../components/layout/Suggestions';
import FeedbackModal from '../components/FeedbackModal';

import { useState, useContext } from 'react';
import { DataContext } from "../components/store/data-context";
import SuggestionModal from '../components/SuggestionModal';


export default function Homepage() {

    const [feedbackModalActive, setFeedbackModalActive] = useState(false);
    const [suggestionModalActive, setSuggestionModalActive] = useState(false);
    const [suggBoxId, setSuggBoxId] = useState(0);

    const ctx = useContext(DataContext);



    function feedbackClickHandler() {
      setFeedbackModalActive(true)
    }

    function backButtonHandler() {
      setFeedbackModalActive(false)
    }

    function addNewFeedback(newFeedback) {

      let request = [{
        id: ctx.data.length + 1,
        title: newFeedback.title,
        category: newFeedback.category,
        upvotes: 0,
        status: 'suggestion',
        description: newFeedback.feedbackDetails,
        comments: []
      }]

      ctx.addRequest(request);
    }


    function suggestionBoxClickHandler(id) {
      setSuggBoxId(id);
      setSuggestionModalActive(true);
    }

  return (
    <>
      <Sidebar />
      <Suggestions suggestionBoxClickHandler={suggestionBoxClickHandler} feedbackClickHandler={feedbackClickHandler} />
      <FeedbackModal addNewFeedback={addNewFeedback} backButtonHandler={backButtonHandler} modalActive={feedbackModalActive}/>
      <SuggestionModal modalActive={suggestionModalActive} id={suggBoxId}></SuggestionModal>
    </>
  );
}
