import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,  
  cSharp,
  mui,
  animazing,
  admindashboard
} from "../assets";

export const navLinks = [
  {
    id: "project",
    title: "Project",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "CSharp",
    icon: cSharp,
  },
  {
    name: "MUI",
    icon: mui,
  }
];

const projects = [
  {
    name: "Animazing",
    description:
      "This is an E-commerce site that I have developed with a working Backend that can be used to get, post, update and delete products and users. It also has a working login and register function. for the Frontend I took inspiration from Solaris Japan, but i simplified it since it was more focused on the Backend. Please notice that I host the Backend on Render.com, if you don't see any Product please wait 5 minutes and come back to the site (that should work than).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      }
    ],
    image: animazing,
    source_code_link: "https://github.com/FatefulWater/Animazing",
    website_link: "https://animazing1.de/"
  },
  {
    name: "Admin Dashboard",
    description:
      "This is an Admin-Dashboard that is primarily focused on Frontend, it has a light- and dark Mode with some cool features like a world view that shows where the most user are coming from with a large Data set. It is primarily a Frontend Project with some work from the Backend. Please notice that I host the Backend on Render.com, if you don't see any Data please wait 5 minutes and come back to the site (that should work than).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "orange-text-gradient",
      },
    ],
    image: admindashboard,
    source_code_link: "https://github.com/FatefulWater/Admin-Dashboard",
    website_link: "	https://admin-dashboard-portfolio.online"
  },
];

export { technologies, projects};