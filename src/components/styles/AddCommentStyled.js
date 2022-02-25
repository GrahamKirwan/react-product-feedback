import styled from "styled-components";

export const AddCommentStyled = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    margin-top: 24px;

    h3 {
        margin: 0;
        font-size: 18px;
        line-height: 26px;
        color: #3a4374;
    }

    textarea {
        width: calc(100% - 40px);
        outline: none;
        padding: 20px;
        border-radius: 10px;
        background-color: #f2f4ff;
        color: #647196;
        height: 70px;
        font-family: "Jost",sans-serif;
        font-size: 16px;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 20px 0;
        border: ${(props) => props.emptyComment ? '1px solid red' : 'none'};

        &:hover, &:focus {
            cursor: pointer;
            border: 1px solid #4661e6;
            height: 68px;
            border: ${(props) => props.emptyComment ? '1px solid red' : 'none'};
        }
    }
`

export const CommentBottom = styled.div`
    display: flex;
    justify-content: space-between;

    p {
        font-size: 15px;
        line-height: 22px;
        color: #647196;
        font-weight: 500s;
    }

    button {
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
        font-weight: 800;

        &:hover {
            background-color: #c75af6;
            cursor: pointer;
        }
    }
`

export const ErrorMsg = styled.p`
    color: red;
    font-size: 12px;
    margin: 0;
    display: ${(props) => props.emptyComment ? 'inherit' : 'none'};

`