import {
  SidebarRoadmapStyled,
  RoadmapStatsStyled,
  NumStyled,
  OrangeCircle,
  PurpleCircle,
  GreenCircle,
  StatContainer,
  CircleContainer,
  Text,
} from "../styles/SidebarRoadmapStyled";
import { Link } from "react-router-dom";


import { useContext } from "react";
import { DataContext } from "../store/data-context";

export default function SidebarRoadmap() {

  const ctx = useContext(DataContext);

  let planned = 0;
  let inProgress = 0;
  let live = 0;


  for (let i = 0; i < ctx.data.length; i++) {
    if (ctx.data[i].status == "planned") {
        planned++;
    }
    if (ctx.data[i].status == "in-progress") {
        inProgress++;
    }
    if (ctx.data[i].status == "live") {
        live++;
    }
  }


  return (
    <SidebarRoadmapStyled>
      <div>
        <h3>Roadmap</h3>
        <Link to="/roadmap">View</Link>
      </div>
      <RoadmapStatsStyled>
        <StatContainer>
          <CircleContainer>
            <OrangeCircle></OrangeCircle>
            <Text>Planned</Text>
          </CircleContainer>
          <NumStyled>{planned}</NumStyled>
        </StatContainer>

        <StatContainer>
          <CircleContainer>
            <PurpleCircle></PurpleCircle>
            <Text>In-Progress</Text>
          </CircleContainer>
          <NumStyled>{inProgress}</NumStyled>
        </StatContainer>

        <StatContainer>
          <CircleContainer>
            <GreenCircle></GreenCircle>
            <Text>Live</Text>
          </CircleContainer>
          <NumStyled>{live}</NumStyled>
        </StatContainer>
      </RoadmapStatsStyled>
    </SidebarRoadmapStyled>
  );
}
