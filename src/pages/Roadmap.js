import {RoadmapStyled} from '../components/styles/RoadmapStyled'
import RoadmapBanner from '../components/RoadmapBanner'
import RoadmapContent from '../components/RoadmapContent'
import FeedbackModal from '../components/FeedbackModal'

import { useState, useContext } from 'react'

import { DataContext } from '../components/store/data-context'
import SuggestionModal from '../components/SuggestionModal'

export default function Roadmap() {

    const [feedbackModalActive, setFeedbackModalActive] = useState(false);
    const [suggestionModalActive, setSuggestionModalActive] = useState(false);
    const [suggBoxId, setSuggBoxId] = useState(0);


    const ctx = useContext(DataContext);


    function backButtonHandler() {
        setFeedbackModalActive(false)
    }

    function feedbackBtnHandler() {
        setFeedbackModalActive(true);
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

    function roadmapItemBtnHandler(id) {
        setSuggBoxId(id);
        setSuggestionModalActive(true);
    }

    function suggestionModalBackButtonHandler() {
        setSuggestionModalActive(false);
    }


    return (
        <RoadmapStyled>
            <RoadmapBanner feedbackBtnHandler={feedbackBtnHandler}/>
            <RoadmapContent roadmapItemBtnHandler={roadmapItemBtnHandler} />
            <FeedbackModal addNewFeedback={addNewFeedback} backButtonHandler={backButtonHandler} modalActive={feedbackModalActive}/>
            <SuggestionModal suggestionModalBackButtonHandler={suggestionModalBackButtonHandler} modalActive={suggestionModalActive} id={suggBoxId}/>
        </RoadmapStyled>
    )
}