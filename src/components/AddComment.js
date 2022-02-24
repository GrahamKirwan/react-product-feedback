import { AddCommentStyled, CommentBottom } from './styles/AddCommentStyled.js'

export default function AddComment() {
    return (
        <AddCommentStyled>
            <h3>Add Comment</h3>
            <textarea placeholder='Type your comment here'></textarea>
            <CommentBottom>
                <p>250 Characters Left</p>
                <button>Post Comment</button>
            </CommentBottom>
        </AddCommentStyled>
    )
}