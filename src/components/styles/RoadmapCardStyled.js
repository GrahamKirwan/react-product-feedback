import styled from "styled-components";

export const RoadmapCardStyled = styled.div`
    border: none;
    position: relative;
    height: 250px;
    border-radius: 10px;
    background-color: #fff;
    padding: 30px 32px;
    margin-bottom: 24px;
    font-family: "Jost",sans-serif;
    overflow: hidden;
`

export const TopColor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 6px;
    background-color: #f49f85;
    width: 100%;
    background-color: ${(props) => props.status == 'planned' ? '#f49f85' : props.status == 'live' ? '#62bcfa' : '#ad1fea'};
`

export const CircleContainer = styled.div`
    display: flex;
    align-items: center;
`

export const OrangeCircle = styled.div`
    height: 8px;
    width: 8px;
    background-color: ${(props) => props.status == 'planned' ? '#f49f85' : props.status == 'live' ? '#62bcfa' : '#ad1fea'};
    border-radius: 50%;
    margin-right: 16px;
`

export const Text = styled.p`
    margin: 0;
    color: #647196;
`

export const Title = styled.button`
    width: fit-content;
    border: none;
    outline: none;
    background-color: #fff;
    font-family: "Jost",sans-serif;
    color: #3a4374;
    font-size: 18px;
    line-height: 26px;
    font-weight: 700;
    padding: 0;
    cursor: pointer;
    margin: 16px 0;

    &:hover {
        color: #4661e6;
    }
`

export const Description = styled.p`
    color: #647196;
    font-size: 16px;
    line-height: 23px;
    margin-top: 0;
`

export const Tag = styled.div`
    border: none;
    padding: 5px 13px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 16px;
    background-color: #f2f4ff;
    color: #4661e6;
    display: inline-block;
`

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Upvote = styled.div`
    /* width: 40px; */
    padding: 0 9px;
    height: 48px;
    border-radius: 10px;
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    background-color: ${(props) => props.active ? '#4661e6' : '#f2f4ff'};
    color: ${(props) => props.active ? '#fff' : '#373f68'};
    user-select: none;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.active ? '#4661e6' : '#cfd7ff'};

    }

    svg {
        margin-right: 6px;
    }
`

export const CommentsContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 20px;

    p {
        margin: 0;
        font-size: 18px;
        line-height: 26px;
        font-weight: 700;
        color: #000;
        margin-left: 11px;
    }
`

