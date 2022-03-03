import styled from "styled-components";

export const ErrorStyled = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        color: #3a4374;
        font-size: 18px;
        margin: 0;
        margin-top: 20px;
    }

    p {
        color: #647196;
        text-align: center;
        font-size: 13px;
        padding: 0.8rem 1rem 1.5rem;
        margin: 0;
    }
`