import { FeedbackButtonStyled } from "./styles/FeedbackButtonStyled"

import { ReactComponent as PlusSvg } from '../assets/shared/icon-plus.svg';

export default function FeedbackButton() {
    return (
        <FeedbackButtonStyled>
            <PlusSvg></PlusSvg>
            Add Feedback
        </FeedbackButtonStyled>
    )
}