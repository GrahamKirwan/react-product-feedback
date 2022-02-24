import { CommentStyled, UserPhoto, CommentContent, CommentHead, UsernameAndReply, CommentText, Reply } from "./styles/CommentsComponentStyled"
import { useState } from "react";

export default function CommentReplies(props) {

    const [commentReply, setCommentReply] = useState(false);


    function replyBtnHandler() {
        if(commentReply) {
            setCommentReply(false);
        } else {
            setCommentReply(true);
        }
    }

    console.log(props.reply)

    return (
        <CommentStyled lastItem={true} reply={props.reply}>
                <UserPhoto src={require(`../assets/user-images/${props.reply.user.image}`)}></UserPhoto>
                <CommentContent>
                    <CommentHead>
                        <h3>{props.reply.user.name}</h3>
                        <UsernameAndReply>
                            <h4>@{props.reply.user.username}</h4>
                            <button onClick={replyBtnHandler}>Reply</button>
                        </UsernameAndReply>
                    </CommentHead>
                    <CommentText><span>@{props.reply.replyingTo} </span>{props.reply.content}</CommentText>
                    <Reply active={commentReply}>
                        <textarea placeholder="Type your reply here"></textarea>
                        <button>Post Reply</button>
                    </Reply>
                </CommentContent>
        </CommentStyled>
    )
}