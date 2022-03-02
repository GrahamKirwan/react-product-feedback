import { SuggestionsStyled } from "../styles/SuggestionsStyled"
import SuggestionBox from "../SuggestionBox"
import SuggestionsBanner from "./SuggestionsBanner"

import { useContext, useState, useEffect } from 'react';
import { DataContext } from "../store/data-context"
import { TagsContext } from "../store/tags-context"


export default function Suggestions(props) {

    const [suggestions, setSuggestions] = useState([]);

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

     let newSuggs = ctx.data.filter((request => {
        if (request.status == 'suggestion') {
            if (tag == 'all') {
                return request;
            }
            else if(request.category == tag) {
                return request
            }
        }
    }))

    // Trigger this hook whenever we edit feedback or delete feedback
    useEffect(() => {
        setSuggestions(newSuggs);
    }, [ctxTags, ctx.editFeedbackCounter, ctx.data])




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

    function sortByHandler(sort) {

        let noCommentsNotIncluded;
        let noCommentsIncluded;

        // If sort == 'Most Upvotes' sort newData by highest upvotes first - then setSuggestions to newData
        if(sort == 'Most Upvotes') {
            newSuggs.sort((a, b) => parseFloat(b.upvotes) - parseFloat(a.upvotes));
            
        }

        // If sort == 'Least Upvotes' sort newData by lowest upvotes first
        if(sort == 'Least Upvotes') {
            newSuggs.sort((a, b) => parseFloat(a.upvotes) - parseFloat(b.upvotes));
            
        }

        // If sort == 'Most Comments' sort newData by highest comments first
        if(sort == 'Most Comments') {
            noCommentsNotIncluded = newSuggs.map((item) => {
                if(item.comments) {
                    return item
                }
            })
            noCommentsIncluded = newSuggs.map((item) => {
                if(!item.comments) {
                    return item
                }
            })
            noCommentsNotIncluded = noCommentsNotIncluded.filter((item) => {
                return item !== undefined;
            })
            noCommentsIncluded = noCommentsIncluded.filter((item) => {
                return item !== undefined;
            })
            noCommentsNotIncluded.sort((a, b) => parseFloat(b.comments.length) - parseFloat(a.comments.length));
                
            newSuggs = noCommentsNotIncluded.concat(noCommentsIncluded);
            
        }

        // If sort == 'Least Comments' sort newData by highest comments first
        if(sort == 'Least Comments') {
            noCommentsNotIncluded = newSuggs.map((item) => {
                if(item.comments) {
                    return item
                }
            })
            noCommentsIncluded = newSuggs.map((item) => {
                if(!item.comments) {
                    return item
                }
            })
            noCommentsNotIncluded = noCommentsNotIncluded.filter((item) => {
                return item !== undefined;
            })
            noCommentsIncluded = noCommentsIncluded.filter((item) => {
                return item !== undefined;
            })
            noCommentsNotIncluded.sort((a, b) => parseFloat(a.comments.length) - parseFloat(b.comments.length));
                
            newSuggs = noCommentsIncluded.concat(noCommentsNotIncluded);
            
        }

        setSuggestions(newSuggs);

    }
    
    return (
        <SuggestionsStyled hide={props.hideSuggestions}>
            <SuggestionsBanner sortByHandler={sortByHandler} feedbackClickHandler={feedbackClickHandler} suggestions={suggestions}></SuggestionsBanner>
            {suggestions.map((suggestion) => <SuggestionBox suggestionBoxClickHandler={suggestionBoxClickHandler} upvoteClickHandler={upvoteClickHandler} suggestion={suggestion} key={suggestion.id}/>)}
        </SuggestionsStyled>
    )
}