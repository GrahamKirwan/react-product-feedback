import React from 'react'
import { ReactComponent as ArrowSvg2 } from '../assets/shared/icon-arrow-left2.svg';

import {RoadmapBannerStyled, BackBtn} from '../components/styles/RoadmapBannerStyled'

import FeedbackButton from '../components/FeedbackButton';

import { Link } from "react-router-dom";

export default function RoadmapBanner(props) {

    function feedbackBtnHandler() {
        props.feedbackBtnHandler();
    }

    return (
        <RoadmapBannerStyled>
            <div>
                <BackBtn>
                    <Link to="/">
                        <ArrowSvg2 />
                        <p>Go Back</p>
                    </Link>
                </BackBtn>
                <h2>Roadmap</h2>
            </div>
            <div>
                <FeedbackButton feedbackClickHandler={feedbackBtnHandler}/>
            </div>
        </RoadmapBannerStyled>
    )
}