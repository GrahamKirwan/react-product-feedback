import { SuggestionModalStyled } from "./styles/SuggestionModalStyled"

export default function SuggestionModal (props) {
    
    return (
        <SuggestionModalStyled modalActive={props.modalActive}>
            <p>{props.id}</p>
            
        </SuggestionModalStyled>
    )
}