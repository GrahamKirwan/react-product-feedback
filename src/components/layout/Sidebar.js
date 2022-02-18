import SidebarBanner from "./SidebarBanner";
import { SidebarStyled } from "../styles/SidebarStyled";
import SidebarTags from "./SidebarTags";
import SidebarRoadmap from "./SidebarRoadmap";

export default function Sidebar() {
    return (
        <SidebarStyled>
            <SidebarBanner></SidebarBanner>
            <SidebarTags></SidebarTags>
            <SidebarRoadmap></SidebarRoadmap>
        </SidebarStyled>
    )
}