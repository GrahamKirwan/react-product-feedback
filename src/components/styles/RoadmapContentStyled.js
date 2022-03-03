import styled from "styled-components";

export const RoadmapContentStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 44px;
`

export const ColumnHeader = styled.h3`
    font-size: 18px;
    line-height: 26px;
    color: #3a4374;
    margin: 0;
`

export const ColumnDesc = styled.p`
    font-size: 16px;
    line-height: 23px;
    color: #647196;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 40px;
`

export const PlannedColumn = styled.div`
    /* height: 500px;
    background-color: green; */
`

export const ProgressColumn = styled.div`
    /* height: 500px;
    background-color: blue; */
`

export const LiveColumn = styled.div`
    /* height: 500px;
    background-color: orange; */
`