import { UpvoteStyled } from "./styles/UpvoteStyled"

import { ReactComponent as UpSvg } from '../assets/shared/icon-arrow-up.svg';


export default function Upvote(props) {
    return(
        <UpvoteStyled>
            <UpSvg></UpSvg>
            {props.children}
        </UpvoteStyled>
    )
}