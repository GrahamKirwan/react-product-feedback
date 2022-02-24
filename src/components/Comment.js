import { CommentStyled, UserPhoto, CommentContent, CommentHead, UsernameAndReply, CommentText, Reply } from "./styles/CommentsComponentStyled"

import { useState } from "react";

export default function Comment(props) {

    const [commentReply, setCommentReply] = useState(false);

    function replyBtnHandler () {
        if(commentReply) {
            setCommentReply(false);
        } else {
            setCommentReply(true);
        }
    }

    return (
        <CommentStyled>
                <UserPhoto src={require(`../assets/user-images/${props.item.user.image}`)}></UserPhoto>
                <CommentContent>
                    <CommentHead>
                        <h3>{props.item.user.name}</h3>
                        <UsernameAndReply>
                            <h4>@{props.item.user.username}</h4>
                            <button onClick={replyBtnHandler}>Reply</button>
                        </UsernameAndReply>
                    </CommentHead>
                    <CommentText>{props.item.content}</CommentText>
                    <Reply active={commentReply}>
                        <textarea placeholder="Type your reply here"></textarea>
                        <button>Post Reply</button>
                    </Reply>
                </CommentContent>
        </CommentStyled>
    )
}