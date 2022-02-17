import { SidebarTagStyled } from "../styles/SidebarTagStyled"

export default function SidebarTag(props) {
    function tagClickHandler() {
        props.tagClickHandler(props.tag.id);   
    }

  return (
      <SidebarTagStyled onClick={tagClickHandler} props={props}>
        {props.children}
      </ SidebarTagStyled>

  )
}
