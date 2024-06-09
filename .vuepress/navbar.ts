import {NavItem} from "vuepress/config";

export default [
    { text: '首页', link: '/' },
    {
        text: "Java",
        link: '/Java/'
    },
    {
        text: "数据库",
        link: '/数据库/'
    },
    {
        text: "计算机网络",
        link: '/计算机网络/'
    },
    {
        text: "操作系统",
        link: '/操作系统/'
    },
    {
        text: "数据结构与算法",
        link: '/数据结构与算法/'
    },
    {
        text: "学习路线",
        link: '/学习路线/'
    },
    {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
        ]
    }
] as NavItem[];
