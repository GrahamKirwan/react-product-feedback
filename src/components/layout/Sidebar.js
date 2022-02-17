import SidebarBanner from "./SidebarBanner";
import { SidebarStyled } from "../styles/SidebarStyled";
import SidebarTags from "./SidebarTags";

export default function Sidebar() {
    return (
        <SidebarStyled>
            <SidebarBanner></SidebarBanner>
            <SidebarTags></SidebarTags>
        </SidebarStyled>
    )
}