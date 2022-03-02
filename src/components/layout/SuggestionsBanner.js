import {SuggestionsBannerStyled, BannerLeft, SortBy, SortByOptions} from '../styles/SuggestionsBannerStyled'
import FeedbackButton from '../FeedbackButton'

import { ReactComponent as SuggSvg } from '../../assets/suggestions/icon-suggestions.svg';
import { ReactComponent as DownSvg } from '../../assets/shared/icon-arrow-down2.svg';
import { ReactComponent as CheckSvg } from "../../assets/shared/icon-check.svg";

import { useState } from 'react';

export default function SuggestionsBanner(props) {

    const [sortBy, setSortBy] = useState('Most Upvotes');
    const [sortByDropdown, setSortByDropdown] = useState(false);


    function feedbackClickHandler() {
        props.feedbackClickHandler();
    }

    function sortByBtnHandler() {
        if(sortByDropdown) {
            setSortByDropdown(false);
        } else {
            setSortByDropdown(true);
        }
    }

    function mostUpvotesClickHandler() {
        setSortBy('Most Upvotes');
        setSortByDropdown(false);
        props.sortByHandler('Most Upvotes');
    }
    function leastUpvotesClickHandler() {
        setSortBy('Least Upvotes');
        setSortByDropdown(false);
        props.sortByHandler('Least Upvotes');
    }
    function mostCommentsClickHandler() {
        setSortBy('Most Comments');
        setSortByDropdown(false);
        props.sortByHandler('Most Comments');
    }
    function leastCommentsClickHandler() {
        setSortBy('Least Comments');
        setSortByDropdown(false);
        props.sortByHandler('Least Comments');
    }


    return (
        <SuggestionsBannerStyled>
            <BannerLeft>
                <SuggSvg></SuggSvg>
                <h2>{props.suggestions.length} Suggestions</h2>
                <SortBy onClick={sortByBtnHandler} visible={sortByDropdown} >
                    <p>Sort By:</p>
                    <h4>{sortBy}</h4>
                    <DownSvg/>
                </SortBy>
                <SortByOptions visible={sortByDropdown}>
                    <ul>
                    <li onClick={mostUpvotesClickHandler}>
                        {sortBy == "Most Upvotes" ? (
                        <p style={{ color: "#ad1fea" }}>Most Upvotes</p>
                        ) : (
                        <p>Most Upvotes</p>
                        )}
                        {sortBy == "Most Upvotes" && <CheckSvg />}
                    </li>
                    <li onClick={leastUpvotesClickHandler}>
                        {sortBy == "Least Upvotes" ? (
                        <p style={{ color: "#ad1fea" }}>Least Upvotes</p>
                        ) : (
                        <p>Least Upvotes</p>
                        )}
                        {sortBy == "Least Upvotes" && <CheckSvg />}
                    </li>
                    <li onClick={mostCommentsClickHandler}>
                        {sortBy == "Most Comments" ? (
                        <p style={{ color: "#ad1fea" }}>Most Comments</p>
                        ) : (
                        <p>Most Comments</p>
                        )}
                        {sortBy == "Most Comments" && <CheckSvg />}
                    </li>
                    <li onClick={leastCommentsClickHandler}>
                        {sortBy == "Least Comments" ? (
                        <p style={{ color: "#ad1fea" }}>Least Comments</p>
                        ) : (
                        <p>Least Comments</p>
                        )}
                        {sortBy == "Least Comments" && <CheckSvg />}
                    </li>
                    </ul>
                </SortByOptions>
            </BannerLeft>
            <FeedbackButton feedbackClickHandler={feedbackClickHandler}/>
        </SuggestionsBannerStyled>
    )
}