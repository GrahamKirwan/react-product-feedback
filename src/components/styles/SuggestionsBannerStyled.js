import styled from "styled-components";

export const SuggestionsBannerStyled = styled.div`
    height: 30px;
    background-color: #373f68;
    border-radius: 10px;
    color: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    
    h2 {
        margin: 0;
        font-size: 18px;
        line-height: 26px;
        font-weight: 700;
        margin-right: 25px;
    }

    svg {
        margin-right: 30px;
    }
`

export const BannerLeft = styled.div`
    display: flex;
    align-items: center;
`