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
    width: 540px;
    margin: 0 auto;
    margin-top: 60px;
`

export const BackBtn = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
        margin-right: 15px;
    }

    p {
        color: #647196;
        font-weight: 700;
    }

    &:hover > p{
        text-decoration: underline;
    }
`