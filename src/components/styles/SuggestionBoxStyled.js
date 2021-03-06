import styled from "styled-components";

export const SuggestionBoxStyled = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 24px;

    &:hover {
        border: ${(props) => props.modal ? 'none' : '1px solid #ad1fea'};
        cursor: ${(props) => props.modal ? 'auto' : 'pointer'}
    }

    @media screen and (max-width: 750px) {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 20px;
        padding: 30px 20px;
    }

`

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;

`
export const RightContainer = styled.div`
    display: flex;
    align-items: center;

    svg {
        margin-right: 10px;
    }
`
export const SuggestionContent = styled.div`
    padding-left: 30px;

    h3 {
        margin: 0;
        color: #3a4374;
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 10px;
    }
    p {
        margin: 0;
        color: #647196;
        font-size: 16px;
        line-height: 23px;
    }
`
export const Tag = styled.div`
    display: inline-block;
    border: none;
    padding: 5px 13px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 10px;
    background-color: #f2f4ff;
    color: #4661e6;
    margin-top: 10px;
`

export const Comments = styled.p`
    font-weight: 700;
    margin: 0;
    font-size: 18px;
    color: #000;
`