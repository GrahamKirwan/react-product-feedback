import {RoadmapStyled} from '../components/styles/RoadmapStyled'
import RoadmapBanner from '../components/RoadmapBanner'
import RoadmapContent from '../components/RoadmapContent'
import FeedbackModal from '../components/FeedbackModal'

import { useState, useContext } from 'react'

import { DataContext } from '../components/store/data-context'

export default function Roadmap() {

    const [feedbackModalActive, setFeedbackModalActive] = useState(false);

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


    return (
        <RoadmapStyled>
            <RoadmapBanner feedbackBtnHandler={feedbackBtnHandler}/>
            <RoadmapContent />
            <FeedbackModal addNewFeedback={addNewFeedback} backButtonHandler={backButtonHandler} modalActive={feedbackModalActive}/>
        </RoadmapStyled>
    )
}