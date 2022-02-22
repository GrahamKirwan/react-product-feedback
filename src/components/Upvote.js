import { UpvoteStyled } from "./styles/UpvoteStyled"

import { ReactComponent as UpSvg } from '../assets/shared/icon-arrow-up.svg';
import { ReactComponent as UpSvgWhite } from '../assets/shared/icon-arrow-up-white.svg';


export default function Upvote(props) {

    function upvoteClickHandler() {
        props.upvoteClickHandler();
    }


    return(
        <UpvoteStyled active={props.active} onClick={upvoteClickHandler}>
            {props.active ? <UpSvgWhite></UpSvgWhite> : <UpSvg></UpSvg>}
            
            {props.children}
        </UpvoteStyled>
    )
}