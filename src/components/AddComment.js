import { AddCommentStyled, CommentBottom } from './styles/AddCommentStyled.js'

import { useState, useRef } from 'react'

export default function AddComment() {

    const [charsLeft, setCharsLeft] = useState(250);
    const charsRef = useRef();


    function keyUpHandler() {
        let length = charsRef.current.value.length;
        setCharsLeft(250 - length)
    }

    return (
        <AddCommentStyled>
            <h3>Add Comment</h3>
            <textarea ref={charsRef} onKeyUp={keyUpHandler} maxLength="250" placeholder='Type your comment here'></textarea>
            <CommentBottom>
                <p>{charsLeft} Characters Left</p>
                <button>Post Comment</button>
            </CommentBottom>
        </AddCommentStyled>
    )
}