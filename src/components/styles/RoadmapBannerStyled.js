import styled from "styled-components";

export const RoadmapBannerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #373f68;
    padding: 14px 32px;
    border-radius: 10px;
    color: white;
    margin-bottom: 50px;

    h2 {
        margin: 0;
        font-size: 24px;
        line-height: 35px;
        font-weight: 800;
    }

`

export const BackBtn = styled.div`

    a {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: white;
        text-decoration: none;
        font-size: 14px;
        font-weight: 700;
    }


    svg {
        margin-right: 15px;
    }

    &:hover > a {
        text-decoration: underline;
    }
`