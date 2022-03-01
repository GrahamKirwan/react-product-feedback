import { SuggestionsStyled } from "../styles/SuggestionsStyled"
import SuggestionBox from "../SuggestionBox"
import SuggestionsBanner from "./SuggestionsBanner"

import { useContext } from 'react';
import { DataContext } from "../store/data-context"


export default function Suggestions(props) {


    const ctx = useContext(DataContext);

    let upvoteClicked = false;


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
        upvoteClicked = true;
    }

    // Dont trigger this function if upvote handler is clicked
    function suggestionBoxClickHandler(id) {
        
        if(!upvoteClicked) {
            props.suggestionBoxClickHandler(id)
        }
        

    }
    
    return (
        <SuggestionsStyled hide={props.hideSuggestions}>
            <SuggestionsBanner feedbackClickHandler={feedbackClickHandler} suggestions={suggestions}></SuggestionsBanner>
            {suggestions.map((suggestion) => <SuggestionBox suggestionBoxClickHandler={suggestionBoxClickHandler} upvoteClickHandler={upvoteClickHandler} suggestion={suggestion} key={suggestion.id}/>)}
        </SuggestionsStyled>
    )
}