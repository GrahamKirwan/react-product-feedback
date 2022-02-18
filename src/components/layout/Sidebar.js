import SidebarBanner from "./SidebarBanner";
import SidebarTags from "./SidebarTags";
import SidebarRoadmap from "./SidebarRoadmap";

export default function Sidebar() {
    return (
        <div>
            <SidebarBanner></SidebarBanner>
            <SidebarTags></SidebarTags>
            <SidebarRoadmap></SidebarRoadmap>
        </div>
    )
}