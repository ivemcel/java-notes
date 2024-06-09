import {SidebarConfig4Multiple} from "vuepress/config";

import roadmapSideBar from "./sidebars/roadmapSideBar";
// @ts-ignore
export default {
    "/学习路线/": roadmapSideBar,
    "/Java/": roadmapSideBar,
    "/操作系统/": roadmapSideBar,
    "/数据库/": roadmapSideBar,
    "/计算机网络/": roadmapSideBar,
    "/数据结构与算法/": roadmapSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
