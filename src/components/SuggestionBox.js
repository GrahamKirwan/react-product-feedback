import { SuggestionBoxStyled, LeftContainer, RightContainer, SuggestionContent, Tag, Comments } from "./styles/SuggestionBoxStyled"
import Upvote from "./Upvote"

import { ReactComponent as CommentSvg } from '../assets/shared/icon-comments.svg';

export default function SuggestionBox(props) {

    function camelCaseHelper(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <SuggestionBoxStyled>
            <LeftContainer>
                <Upvote>{props.suggestion.upvotes}</Upvote>
                <SuggestionContent>
                    <h3>{props.suggestion.title}</h3>
                    <p>{props.suggestion.description}</p>
                    <Tag>{camelCaseHelper(props.suggestion.category)}</Tag>
                </SuggestionContent>
            </LeftContainer>
            <RightContainer>
                <CommentSvg></CommentSvg>
                <Comments>{props.suggestion.comments ? <span>{props.suggestion.comments.length}</span> : <span>0</span>}</Comments>
            </RightContainer>
        </SuggestionBoxStyled>
    )
}

