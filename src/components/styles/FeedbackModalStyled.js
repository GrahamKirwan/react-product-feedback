import styled from "styled-components";

export const FeedbackModalStyled =  styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: #f2f4ff;
    display: ${(props) => props.modalActive ? 'initial' : 'none'};
`

export const FeedbackModalContainer = styled.div`
    background-color: #fff;
    width: 540px;
    margin: 0 auto;
`