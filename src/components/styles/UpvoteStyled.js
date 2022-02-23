import styled from "styled-components";

export const UpvoteStyled = styled.div`
    width: 40px;
    height: 53px;
    border-radius: 10px;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
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
`