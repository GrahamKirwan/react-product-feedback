import { FeedbackModalStyled, FeedbackModalContainer } from "./styles/FeedbackModalStyled";

export default function FeedbackModal(props) {
    
  return (
    <FeedbackModalStyled modalActive={props.modalActive}>
        <FeedbackModalContainer>
            <h1>test</h1>
        </FeedbackModalContainer>
    </FeedbackModalStyled> 
  )
}
