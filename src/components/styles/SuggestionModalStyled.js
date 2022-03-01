import styled from "styled-components";

export const SuggestionModalStyled = styled.div`
    background-color: #f2f4ff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    display: ${(props) => props.modalActive ? 'initial' : 'none'};
`

export const SuggestionsModalContainer = styled.div`

    width: 800px;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 100px;
`

export const SuggestionsModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const EditFeedbackButton = styled.button`
    margin-bottom: 40px;
    border: none;
    outline: none;
    width: 158px;
    height: 44px;
    border-radius: 10px;
    background-color: #4661e6;
    color: #f2f4ff;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background-color: #7c91f9;
    }
`