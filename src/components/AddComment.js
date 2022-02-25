import { AddCommentStyled, CommentBottom, ErrorMsg } from './styles/AddCommentStyled.js'

import { useState, useRef, useContext } from 'react'

import { DataContext } from "../components/store/data-context";

export default function AddComment(props) {

    const [charsLeft, setCharsLeft] = useState(250);
    const [emptyComment, setEmptyComment] = useState(false);
    const charsRef = useRef();

    const ctx = useContext(DataContext);


    function keyUpHandler() {
        let length = charsRef.current.value.length;
        setCharsLeft(250 - length)
    }

    function postCommentClickHandler () {
        if (charsRef.current.value.length < 1) {
            setEmptyComment(true);
        } else {
            let comment = charsRef.current.value;
            setEmptyComment(false);
            charsRef.current.value = '';
            setCharsLeft(250);
            
            // Post to context
            ctx.addSuggComment(props.suggestion.id, comment);
        }
        
    }

    return (
        <AddCommentStyled emptyComment={emptyComment}>
            <h3>Add Comment</h3>
            <textarea ref={charsRef} onKeyUp={keyUpHandler} maxLength="250" placeholder='Type your comment here'></textarea>
            <ErrorMsg emptyComment={emptyComment}>Can't leave any fields empty</ErrorMsg>
            <CommentBottom>
                <p>{charsLeft} Characters Left</p>
                <button onClick={postCommentClickHandler}>Post Comment</button>
            </CommentBottom>
        </AddCommentStyled>
    )
}