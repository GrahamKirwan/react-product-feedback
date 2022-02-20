import { FeedbackButtonStyled } from "./styles/FeedbackButtonStyled"

import { ReactComponent as PlusSvg } from '../assets/shared/icon-plus.svg';

export default function FeedbackButton(props) {

    function feedbackClickHandler () {
        props.feedbackClickHandler();
    }

    return (
        <FeedbackButtonStyled onClick={feedbackClickHandler}>
            <PlusSvg></PlusSvg>
            Add Feedback
        </FeedbackButtonStyled>
    )
}