import { SuggestionsStyled } from "../styles/SuggestionsStyled"
import SuggestionBox from "../SuggestionBox"
import SuggestionsBanner from "./SuggestionsBanner"

import { data } from "../layout/data";


const suggestions = data.productRequests.filter((request => {
    if (request.status == 'suggestion') {
        return request
    }
}))


export default function Suggestions() {


    return (
        <SuggestionsStyled>
            <SuggestionsBanner suggestions={suggestions}></SuggestionsBanner>
            {suggestions.map((suggestion) => <SuggestionBox suggestion={suggestion} key={suggestion.id}/>)}
        </SuggestionsStyled>
    )
}