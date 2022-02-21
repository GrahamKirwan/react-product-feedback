import Sidebar from '../components/layout/Sidebar';
import Suggestions from '../components/layout/Suggestions';
import FeedbackModal from '../components/FeedbackModal';

import { useState, useContext } from 'react';
import { DataContext } from "../components/store/data-context";


export default function Homepage() {

    const [modalActive, setModalActive] = useState(false);
    const ctx = useContext(DataContext);


    function feedbackClickHandler() {
        setModalActive(true)
    }

    function backButtonHandler() {
        setModalActive(false)
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

  return (
    <>
      <Sidebar />
      <Suggestions feedbackClickHandler={feedbackClickHandler} />
      <FeedbackModal addNewFeedback={addNewFeedback} backButtonHandler={backButtonHandler} modalActive={modalActive}/>
    </>
  );
}
