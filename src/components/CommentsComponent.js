import { CommentsComponentStyled } from "./styles/CommentsComponentStyled"


import Comment from "../components/Comment";

export default function CommentsComponent(props) {


    return(
        <CommentsComponentStyled hide={props.hide}>
            <h3>{props.suggestion.comments ? props.suggestion.comments.length : '0'} Comments</h3>
            {props.suggestion.comments && props.suggestion.comments.map((item, index) => <Comment item={item} key={item.id} lastItem={props.suggestion.comments.length === index+1}></Comment>)}
        </CommentsComponentStyled>
    )
}
