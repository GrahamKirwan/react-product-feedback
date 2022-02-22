import { SuggestionsStyled } from "../styles/SuggestionsStyled"
import SuggestionBox from "../SuggestionBox"
import SuggestionsBanner from "./SuggestionsBanner"

import { useContext } from 'react';
import { DataContext } from "../store/data-context"


export default function Suggestions(props) {


    const ctx = useContext(DataContext);

    
    const suggestions = ctx.data.filter((request => {
        if (request.status == 'suggestion') {
            return request
        }
    }))

    function feedbackClickHandler() {
        props.feedbackClickHandler();
    }

    function upvoteClickHandler(id) {
        ctx.upVote(id);
    }
    
    return (
        <SuggestionsStyled>
            <SuggestionsBanner feedbackClickHandler={feedbackClickHandler} suggestions={suggestions}></SuggestionsBanner>
            {suggestions.map((suggestion) => <SuggestionBox upvoteClickHandler={upvoteClickHandler} suggestion={suggestion} key={suggestion.id}/>)}
        </SuggestionsStyled>
    )
}