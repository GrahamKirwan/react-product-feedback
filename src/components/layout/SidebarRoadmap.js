import { SidebarRoadmapStyled, RoadmapStatsStyled, NumStyled, OrangeCircle, PurpleCircle, GreenCircle, StatContainer, CircleContainer, Text } from "../styles/SidebarRoadmapStyled"

export default function SidebarRoadmap() {
    return (
        <SidebarRoadmapStyled>
            <div>
                <h3>Roadmap</h3>
                <a href="#">View</a>
            </div>
            <RoadmapStatsStyled>
                <StatContainer>
                    <CircleContainer>
                        <OrangeCircle></OrangeCircle>
                        <Text>Planned</Text>
                    </CircleContainer>
                    <NumStyled>2</NumStyled>
                </StatContainer>

                <StatContainer>
                    <CircleContainer>
                        <PurpleCircle></PurpleCircle>
                        <Text>In-Progress</Text>
                    </CircleContainer>
                    <NumStyled>3</NumStyled>
                </StatContainer>

                <StatContainer>
                    <CircleContainer>
                        <GreenCircle></GreenCircle>
                        <Text>Live</Text>
                    </CircleContainer>
                    <NumStyled>1</NumStyled>
                </StatContainer>
            </RoadmapStatsStyled>
            
        </SidebarRoadmapStyled>
    )
}