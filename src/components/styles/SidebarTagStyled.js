import styled from "styled-components";

export const SidebarTagStyled = styled.button`
    border: none;
    padding: 9px 18px;
    font-size: 14px;
    font-weight: 900;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;

    background-color: ${(props) => props.props.tag.active ? "#4661e6" : "#f2f4ff"};
    color: ${(props) => props.props.tag.active ? "#f2f4ff" : "#4661e6"};

    &:hover {
        background-color: ${(props) => props.props.tag.active ? "#cfd7ff" : "#cfd7ff"};
    }
`