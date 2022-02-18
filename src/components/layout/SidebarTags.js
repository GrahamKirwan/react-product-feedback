import { SidebarTagsStyled } from "../styles/SidebarTagsStyled"
import SidebarTag from "./SidebarTag"

import { useContext } from "react"
import { TagsContext } from "../store/tags-context"

export default function SidebarTags() {

    const ctx = useContext(TagsContext);


    //Toggle active state to the clicked tag
    function tagClickHandler(id) {
        const newTags = ctx.tags.map((tag) => {
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
        
        ctx.setTags(newTags)
    }

    return (
        <SidebarTagsStyled>
            {ctx.tags.map(tag => <SidebarTag tag={tag} key={tag.id} tagClickHandler={tagClickHandler}>{tag.tag}</SidebarTag>)}
        </SidebarTagsStyled>
    )
}
