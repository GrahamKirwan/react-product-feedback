import React from 'react'

import { RoadmapContentStyled,  PlannedColumn, ProgressColumn, LiveColumn, ColumnHeader, ColumnDesc} from './styles/RoadmapContentStyled'
import RoadmapCard from './RoadmapCard'

import { DataContext } from './store/data-context'
import { useContext } from 'react'

export default function RoadmapContent(props) {

    const ctx = useContext(DataContext);

    let planned = 0;
    let inProgress = 0;
    let live = 0;
    let plannedArr = [];
    let progressArr = [];
    let liveArr = [];


    for (let i = 0; i < ctx.data.length; i++) {
        if (ctx.data[i].status == "planned") {
            planned++;
            plannedArr.push(ctx.data[i]);
        }
        if (ctx.data[i].status == "in-progress") {
            inProgress++;
            progressArr.push(ctx.data[i]);
        }
        if (ctx.data[i].status == "live") {
            live++;
            liveArr.push(ctx.data[i]);
        }
    }

    function roadmapItemBtnHandler(id) {
        props.roadmapItemBtnHandler(id);
    }


  return (
    <RoadmapContentStyled hide={props.hideSuggestions}>
        <PlannedColumn>
            <ColumnHeader>Planned ({planned})</ColumnHeader>
            <ColumnDesc>Ideas prioritized for research</ColumnDesc>
            {plannedArr.map((item, i) => <RoadmapCard roadmapItemBtnHandler={roadmapItemBtnHandler} item={item} key={i}/>)}
        </PlannedColumn>
        <ProgressColumn>
            <ColumnHeader>In-Progress ({inProgress})</ColumnHeader>
            <ColumnDesc>Currently being developed</ColumnDesc>
            {progressArr.map((item, i) => <RoadmapCard roadmapItemBtnHandler={roadmapItemBtnHandler} item={item} key={i}/>)}
        </ProgressColumn>
        <LiveColumn>
            <ColumnHeader>Live ({live})</ColumnHeader>
            <ColumnDesc>Released features</ColumnDesc>
            {liveArr.map((item, i) => <RoadmapCard roadmapItemBtnHandler={roadmapItemBtnHandler} item={item} key={i}/>)}
        </LiveColumn>
    </RoadmapContentStyled>
  )
}
