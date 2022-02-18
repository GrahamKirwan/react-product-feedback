import { createContext, useState } from "react";

export const TagsContext = createContext();

export function TagsContextProvider(props) {
   

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

    function setTagsHandler(tags) {
        return setTags(tags)
    }

    const context = {
        tags: tags,
        setTags: setTagsHandler
    }

    return (
        <TagsContext.Provider value={context}>
            {props.children}
        </TagsContext.Provider>
    )
}