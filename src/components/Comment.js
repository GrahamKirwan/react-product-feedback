import { CommentStyled, UserPhoto, CommentContent, CommentHead, UsernameAndReply, CommentText, Reply, GreyLine } from "./styles/CommentsComponentStyled"
import CommentReplies from '../components/CommentReplies';
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
        <CommentStyled lastItem={props.lastItem}>
                <UserPhoto src={require(`../assets/user-images/${props.item.user.image}`)}></UserPhoto>
                <GreyLine />
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
                    {props.item.replies && props.item.replies.map((reply, index) => <CommentReplies reply={reply} key={index}></CommentReplies>)}
                </CommentContent>
        </CommentStyled>
    )
}