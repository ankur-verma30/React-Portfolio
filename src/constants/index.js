import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";
import LeetCodeLogo from "../assets/leetcode.jpg";
import GFGLogo from "../assets/gfg.jpg";
import CodeChefLogo from "../assets/codechef.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: " June 2024 - September 2024",
    role: " Full Stack Developer",
    company: "GaoTek Inc.",
    description: `Worked in developing and maintaining web applications using Wordpress.Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Wordpress"],
  },
  {
    year: " August 2023 -August 2024",
    role: "Head of Operations ",
    company: "Developers Student Club GGV",
    description: `Involves overseeing the daily operations of the organization to ensure efficiency and effectiveness. Contributing to the technical side by building web applications using Next.js and React.Implemented responsive designs and optimized frontend performance. `,
    technologies: ["React.js", "TailwindCSS", "Next.js", "Node.js"],
  },
  {
    year: " August 2022 -August 2023",
    role: "Co-Lead of Web/Android Development Team ",
    company: "Developers Student Club GGV",
    description: `Developed and maintained web applications using HTML,CSS,JS. Worked closely with backend developers to integrate frontend components with Node.js APIs. Collaborated with cross-functional teams.`,
    technologies: ["HTML", "CSS", "JS"],
  },
];

export const PROJECTS = [
  {
    title: "Advanced-Web-Developement-Projects",
    image: project1,
    projectLink:"https://github.com/ankur-verma30/Advanced-Web-Developement-Projects",
    description:
      "Variety of Projects on Advaced Web technologies to gain a deeper understanding of web development.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Express","Next.js"],
  },
  {
    title: "MovieMania",
    image: project2,
    projectLink:"https://github.com/ankur-verma30/MovieMania",
    description:
      "An application for managing movies and its comments, with features such as authentication, tracking users, and rating movies.",
    technologies: ["HTML", "CSS", "React", "Firebase"],
  },
  {
    title: "HTML,CSS,JS Projects",
    image: project3,
    projectLink:"https://github.com/ankur-verma30/Simple-Projects-Using-HTML-CSS-JavaScript",
    description:
      "Simple projects to learn HTML,CSS,JS and start building web applications.",
    technologies: ["HTML", "CSS", "Javascript","Bootstrap"],
  },
];

export const CODING_STATS=[
  {  
    title:"LeetCode",
    image: LeetCodeLogo, 
    profileLink:"https://leetcode.com/u/ankur_code07/", 
    discription: "Contest rating of 1,568, with 487 problems solved and five badges earned, including the 200 Days Badge 2024.",
    problemsSolved: '450+', 
  },
  { 
    title:"GFG",
    image: GFGLogo, 
    profileLink: "https://www.geeksforgeeks.org/user/ankur_verma3008/", 
    discription:"Solved 286 problems, have a coding score of 700, a contest rating of 1721, and a current streak of 109 days. You're ranked 63rd among peers.",
    problemsSolved: "280+", 
     
  },
  { 
  
    title:"Codechef",
    image: CodeChefLogo, 
    profileLink: "hhttps://www.codechef.com/users/ankurverma30",
    discription: "Rating of 1486 in Division 3, with a global rank of 30,585 and a country rank of 27,408.", 
    problemsSolved: "50+"
  },
]

export const CONTACT = {
  address: "Guru Ghasidas University Bilaspur, Chhattisgarh,India",
  email: "ankurverma7619@gmail.com",
};
