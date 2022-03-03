import React from 'react'

import { RoadmapContentStyled,  PlannedColumn, ProgressColumn, LiveColumn} from './styles/RoadmapContentStyled'
import RoadmapCard from './RoadmapCard'

export default function RoadmapContent() {
  return (
    <RoadmapContentStyled>
        <PlannedColumn>
            <h3>Planned (2)</h3>
            <p>Ideas prioritized for research</p>
            <RoadmapCard />
        </PlannedColumn>
        <ProgressColumn>
            <h3>In-Progress (3)</h3>
            <p>Currently being developed</p>
        </ProgressColumn>
        <LiveColumn>
            <h3>Live (1)</h3>
            <p>Released features</p>
        </LiveColumn>
    </RoadmapContentStyled>
  )
}
