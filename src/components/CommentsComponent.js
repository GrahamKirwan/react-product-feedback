import { CommentsComponentStyled,  UserPhoto, CommentContent, CommentHead, UsernameAndReply, CommentText, Reply } from "./styles/CommentsComponentStyled"


import Comment from "../components/Comment";

export default function CommentsComponent(props) {


    return(
        <CommentsComponentStyled>
            <h3>{props.suggestion.comments.length} Comments</h3>
            {props.suggestion.comments.map((item) => <Comment item={item} key={item.id}></Comment>)}
        </CommentsComponentStyled>
    )
}
