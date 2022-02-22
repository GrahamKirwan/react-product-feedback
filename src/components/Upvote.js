import { UpvoteStyled } from "./styles/UpvoteStyled"

import { ReactComponent as UpSvg } from '../assets/shared/icon-arrow-up.svg';


export default function Upvote(props) {

    function upvoteClickHandler() {
        props.upvoteClickHandler();
    }

    return(
        <UpvoteStyled onClick={upvoteClickHandler}>
            <UpSvg></UpSvg>
            {props.children}
        </UpvoteStyled>
    )
}