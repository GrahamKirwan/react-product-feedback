import styled from "styled-components";

export const ContainerStyled = styled.div`
    width: 100%;
    margin-top: 60px;
    margin-bottom: 60px;

    display: grid;
    grid-template-columns: 1fr 4fr;


    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        margin-top: 30px
    }
`