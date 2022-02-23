import styled from "styled-components";

export const SuggestionModalStyled = styled.div`
    background-color: #f2f4ff;
    position: absolute;
    top: 0;
    left: 0;
    height: 150%;
    width: 100vw;
    display: ${(props) => props.modalActive ? 'initial' : 'none'};
`