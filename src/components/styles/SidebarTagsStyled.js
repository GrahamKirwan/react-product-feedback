import styled from "styled-components";

export const SidebarTagsStyled = styled.div`
    background-color: #fff;
    margin-top: 30px;
    padding: 0;
    /* height: 90px; */
    color: #fff;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 207px;
    margin-right: 30px;

    @media screen and (max-width: 750px) {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 20px;
    }
`