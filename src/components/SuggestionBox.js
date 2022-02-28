import { SuggestionBoxStyled, LeftContainer, RightContainer, SuggestionContent, Tag, Comments } from "./styles/SuggestionBoxStyled"
import Upvote from "./Upvote"

import { ReactComponent as CommentSvg } from '../assets/shared/icon-comments.svg';

export default function SuggestionBox(props) {


    function camelCaseHelper(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function upvoteClickHandler() {
        props.upvoteClickHandler(props.suggestion.id);
    }

    function suggestionBoxClickHandler() {
        props.suggestionBoxClickHandler(props.suggestion.id);
    }
    

    return(
        <SuggestionBoxStyled onClick={suggestionBoxClickHandler} modal={props.modal}>
            <LeftContainer>
                {props.suggestion && <Upvote upvoteClickHandler={upvoteClickHandler} active={props.suggestion.curUserUpvoted}>{props.suggestion.upvotes}</Upvote>}
                <SuggestionContent>
                {props.suggestion && <h3>{props.suggestion.title}</h3>}
                {props.suggestion && <p>{props.suggestion.description}</p>}
                {props.suggestion && <Tag>{camelCaseHelper(props.suggestion.category)}</Tag>}
                </SuggestionContent>
            </LeftContainer>
            <RightContainer>
                <CommentSvg></CommentSvg>
                {props.suggestion && <Comments>{props.suggestion.comments ? <span>{props.suggestion.comments.length}</span> : <span>0</span>}</Comments>}
            </RightContainer>
        </SuggestionBoxStyled>
    )
}

