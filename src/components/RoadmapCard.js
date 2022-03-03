import React from 'react'
import {RoadmapCardStyled, TopColor, CircleContainer, OrangeCircle, Text, Title, Description, Tag, BottomContainer, Upvote, CommentsContainer} from '../components/styles/RoadmapCardStyled';

import { ReactComponent as ArrowSvg } from '../assets/shared/icon-arrow-up.svg';
import { ReactComponent as ArrowWhiteSvg } from '../assets/shared/icon-arrow-up-white.svg';
import { ReactComponent as CommentsSvg } from '../assets/shared/icon-comments.svg';

import { useContext } from 'react';
import { DataContext } from './store/data-context';

export default function RoadmapCard(props) {

    const ctx = useContext(DataContext);


    function upperCaseHelper(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function upvoteClickHandler() {
        ctx.upVote(props.item.id);
    }

    function roadmapItemBtnHandler() {
        props.roadmapItemBtnHandler(props.item.id);
    }

  return (
    <RoadmapCardStyled>
        <TopColor status={props.item.status} />
        <CircleContainer>
            <OrangeCircle status={props.item.status} />
            <Text>{upperCaseHelper(props.item.status)}</Text>
          </CircleContainer>
          <Title onClick={roadmapItemBtnHandler}>{props.item.title}</Title>
          <Description>{props.item.description}</Description>
          <Tag>{upperCaseHelper(props.item.category)}</Tag>
          <BottomContainer>
              <Upvote onClick={upvoteClickHandler} active={props.item.curUserUpvoted}>{props.item.curUserUpvoted ? <ArrowWhiteSvg /> : <ArrowSvg />}{props.item.upvotes}</Upvote>
              <CommentsContainer>
                  <CommentsSvg />
                  <p>{props.item.comments ? props.item.comments.length : '0'}</p>
              </CommentsContainer>
          </BottomContainer>
    </RoadmapCardStyled>
  )
}

