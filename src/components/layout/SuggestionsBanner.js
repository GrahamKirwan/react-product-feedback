import {SuggestionsBannerStyled, BannerLeft} from '../styles/SuggestionsBannerStyled'
import FeedbackButton from '../FeedbackButton'

import { ReactComponent as SuggSvg } from '../../assets/suggestions/icon-suggestions.svg';

export default function SuggestionsBanner() {
    return (
        <SuggestionsBannerStyled>
            <BannerLeft>
                <SuggSvg></SuggSvg>
                <h2>6 Suggestions</h2>
            </BannerLeft>
            <FeedbackButton/>
        </SuggestionsBannerStyled>
    )
}