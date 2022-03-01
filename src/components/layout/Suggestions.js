import { SuggestionsStyled } from "../styles/SuggestionsStyled"
import SuggestionBox from "../SuggestionBox"
import SuggestionsBanner from "./SuggestionsBanner"

import { useContext } from 'react';
import { DataContext } from "../store/data-context"
import { TagsContext } from "../store/tags-context"


export default function Suggestions(props) {


    const ctx = useContext(DataContext);
    const ctxTags = useContext(TagsContext);

    let upvoteClicked = false;
    let tag;

    for(let i=0; i<ctxTags.tags.length; i++) {
        if (ctxTags.tags[i].active == true) {
            tag = lowerCaseHelper(ctxTags.tags[i].tag);
            if(tag == 'uI') {
                tag = 'UI'
            }
            if(tag == 'uX') {
                tag = 'UX'
            }
        }
    }

    const suggestions = ctx.data.filter((request => {
        if (request.status == 'suggestion') {
            if (tag == 'all') {
                return request;
            }
            else if(request.category == tag) {
                return request
            }
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

    function lowerCaseHelper(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }

    
    
    return (
        <SuggestionsStyled hide={props.hideSuggestions}>
            <SuggestionsBanner feedbackClickHandler={feedbackClickHandler} suggestions={suggestions}></SuggestionsBanner>
            {suggestions.map((suggestion) => <SuggestionBox suggestionBoxClickHandler={suggestionBoxClickHandler} upvoteClickHandler={upvoteClickHandler} suggestion={suggestion} key={suggestion.id}/>)}
        </SuggestionsStyled>
    )
}