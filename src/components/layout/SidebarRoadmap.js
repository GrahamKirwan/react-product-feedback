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

import { data } from "./data";

export default function SidebarRoadmap() {

  let planned = 0;
  let inProgress = 0;
  let live = 0;

  for (let i = 0; i < data.productRequests.length; i++) {
    if (data.productRequests[i].status == "planned") {
        planned++;
    }
    if (data.productRequests[i].status == "in-progress") {
        inProgress++;
    }
    if (data.productRequests[i].status == "live") {
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
