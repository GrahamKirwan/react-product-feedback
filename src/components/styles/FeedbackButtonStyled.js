import styled from "styled-components";

export const FeedbackButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: none;
    outline: none;
    padding: 0 10px;
    width: 158px;
    height: 44px;
    border-radius: 10px;
    background-color: #ad1fea;
    color: #f2f4ff;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background-color: #c75af6;
    }

    svg {
        margin-right: 0px;
    }
`