// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/Siemens.webp';

// Project Section Logo's
import SmarAgroConnect from './assets/work_logo/SmartAgroteam.png';
import MealMate from './assets/work_logo/MealMatee.png';
import Taskmanager from './assets/work_logo/taskmanager.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
    
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Software Development Engineer - Intern",
      company: "Siemens Ltd.",
      date: "June 2025 - August 2025",
      desc: "developed a supplier issue tracking platform using Mendix Studio Pro with secure authentication and real-time reporting. I integrated RESTful APIs with Power BI to deliver live dashboards and automated email notifications to improve supplier–manager communication. This experience strengthened my understanding of enterprise workflows, scalable systems, and data-driven solutions.",
      skills: [
        "Mendix", 
        "APIs",
        "React JS",
        "Power BI",
        "Power Automate",
        "PostgreSQL"
      ],
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Smart AgroConnect",
      description:
        "Smart AgroConnect is an IoT, AI, and Blockchain–based platform designed to help farmers forecast high-demand crops, monitor post-harvest quality, and enable secure, automated payments. The system combines intelligent crop insights with transparent transactions to reduce dependency on middlemen and improve efficiency across the agricultural supply chain.",
      image: SmarAgroConnect,
      tags: ["React JS", "Node Js" , "Express Js" , "MongoDB" , "APIs", "Python"],
      github: "https://github.com/Abhay167746/Smart-AgroConnect2",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "MealMate",
      description:
        "MealMate is a full-stack food delivery application that simplifies online ordering, secure payments, and order management. Built with React, Node.js, Express.js, and MongoDB, the platform includes an admin panel for real-time order tracking and menu management, helping businesses improve efficiency and customer satisfaction.",
      image: MealMate,
      tags: ["React JS", "Node Js" , "Express Js" , "MongoDB" , "APIs", "Stripe", "Postman"],
      github: "https://github.com/Abhay167746/MealMate-FoodDelivery",
      webapp: "https://food-del-frontend-qnfy.onrender.com",
    },
    {
      id: 2,
      title: "Task Manager App",
      description:
        "A React-based task management application designed to help users create, organize, and track daily tasks efficiently. It supports adding, updating, and deleting tasks with a clean and responsive UI, improving productivity and task visibility.",
      image: Taskmanager,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Abhay167746/Task-Manager",
      webapp: "https://task-manager-nine-steel-15.vercel.app/",
    },
  ];  