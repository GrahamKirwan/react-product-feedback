import { SidebarTagsStyled } from "../styles/SidebarTagsStyled"
import SidebarTag from "./SidebarTag"

import { useState } from "react"

export default function SidebarTags() {

    const [tags, setTags] = useState([
        {
            tag: 'All',
            id: 0,
            active: true
        },
        {
            tag: 'UI',
            id: 1,
            active: false
        },
        {
            tag: 'UX',
            id: 2,
            active: false
        },
        {
            tag: 'Enhancement',
            id: 3,
            active: false
        },
        {
            tag: 'Bug',
            id: 4,
            active: false
        },
        {
            tag: 'Feature',
            id: 5,
            active: false
        },
    ])


    function tagClickHandler(id) {

        const newTags = tags.map((tag) => {
            if(tag.id == id) {
                return {
                    tag: tag.tag,
                    id: tag.id,
                    active: true
                }
            }
            else {
                return {
                    tag: tag.tag,
                    id: tag.id,
                    active: false
                }
            }

        })

        setTags(newTags)
        
    }

    return (
        <SidebarTagsStyled>
            {tags.map(tag => <SidebarTag tag={tag} key={tag.id} tagClickHandler={tagClickHandler}>{tag.tag}</SidebarTag>)}
        </SidebarTagsStyled>
    )
}