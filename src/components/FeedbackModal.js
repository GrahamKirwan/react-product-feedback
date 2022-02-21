import { FeedbackModalStyled, FeedbackModalContainer, BackBtn } from "./styles/FeedbackModalStyled";

import { ReactComponent as BackSvg } from '../assets/shared/icon-arrow-left.svg';


export default function FeedbackModal(props) {

    function backButtonHandler() {
        props.backButtonHandler();
    }
    
  return (
    <FeedbackModalStyled modalActive={props.modalActive}>
        <FeedbackModalContainer>
            <BackBtn onClick={backButtonHandler}>
                <BackSvg />
                <p>Go Back</p>
            </BackBtn>
            <h1>test</h1>
        </FeedbackModalContainer>
    </FeedbackModalStyled> 
  )
}
