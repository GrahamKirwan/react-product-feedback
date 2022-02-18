import styled from "styled-components";

export const SidebarRoadmapStyled = styled.div`
    background-color: #fff;
    margin-top: 30px;
    padding: 0;
    color: #3a4374;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 207px;
    margin-right: 30px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }

    h3 {
        margin: 0;
    }

    a {
        border: none;
        outline: none;
        width: auto;
        height: auto;
        border-radius: 10px;
        color: #4661e6;
        background-color: #fff;
        text-align: center;
        text-decoration: underline;
        font-family: "Jost",sans-serif;
        font-size: 14px;
        line-height: 20px;
        font-weight: 700;
    }
`


// STATS

export const RoadmapStatsStyled = styled.div`

    display: flex;
    flex-direction: column;
    padding-top: 20px;

`

export const StatContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
`

export const CircleContainer = styled.div`

`

export const OrangeCircle = styled.div`
    height: 8px;
    width: 8px;
    background-color: #f49f85;
    border-radius: 50%;
    margin-right: 16px;
`

export const PurpleCircle = styled.div`
    height: 8px;
    width: 8px;
    background-color: #ad1fea;
    border-radius: 50%;
    margin-right: 16px;
`

export const GreenCircle = styled.div`
    height: 8px;
    width: 8px;
    background-color: #62bcfa;
    border-radius: 50%;
    margin-right: 16px;
`

export const Text = styled.p`
    margin: 0;
`
export const NumStyled = styled.p`
    font-weight: 700;
    margin: 0;
    font-size: 18px;
    color: #647196;
`