import { CommentStyled, UserPhoto, CommentContent, CommentHead, UsernameAndReply, CommentText, Reply, GreyLine } from "./styles/CommentsComponentStyled"
import CommentReplies from '../components/CommentReplies';
import { useState, useRef, useContext } from "react";

import { DataContext } from "../components/store/data-context";


export default function Comment(props) {

    const [commentReply, setCommentReply] = useState(false);

    const replyRef = useRef();

    const ctx = useContext(DataContext);


    function replyBtnHandler () {
        if(commentReply) {
            setCommentReply(false);
        } else {
            setCommentReply(true);
        }
    }

    function postReplyClickHandler() {
        ctx.commentReply(props.item.id, props.item.user.username, replyRef.current.value);
        setCommentReply(false);
        replyRef.current.value = '';
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
                        <textarea ref={replyRef} placeholder="Type your reply here"></textarea>
                        <button onClick={postReplyClickHandler}>Post Reply</button>
                    </Reply>
                    {props.item.replies && props.item.replies.map((reply, index) => <CommentReplies commentId={props.item.id} reply={reply} key={index}></CommentReplies>)}
                </CommentContent>
        </CommentStyled>
    )
}