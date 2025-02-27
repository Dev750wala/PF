import shortURLImage from './Photos/project-url-shortener.png';
import snakeGameImage from './Photos/project-snake-game.png';
import indiaStatesImage from './Photos/project-india.jpg';
import ProjectManageproject from './Photos/ProjectManageproject.png';


// LEFT BIO
export const L_bio = {
    bio: "I am learning full stack web development. Crafting digital experiences, end to end.",
};

// RIGHT BIO
export const R_bio = {
    p1: 
        "Back in 2022, I decided to try my hand at web development and tumbled headfirst into the exciting world of coding and technology. Fast-forward to today, and my journey has been a rewarding one, filled with learning new technologies and tools along the way.",
    p2: 
        "Currently, I'm diving into the cutting-edge realm of Web3 development, with a focus on the Ethereum network. I enjoy building personal and college projects, integrating backend functionality with a strong emphasis on security, and now exploring the decentralized web's potential. In my free time, I stay immersed in cybersecurity and tech news, constantly expanding my knowledge to enhance digital security in this rapidly evolving space.",
    p3: 
        "When I'm not engrossed in learning or developing, I enjoy taking some downtime to unwind. This usually involves cozying up with a good movie, getting lost in the pages of a book, exploring new places on spontaneous adventures, and, of course, making friends with the neighborhood cats."
}

// PROJECTS
export const projects = [
    {
        link: "https://github.com/Dev750wala/Hackathon-SCET",
        image: ProjectManageproject, 
        title: "Project Collaboration Platform",
        description: "A project management platform designed to facilitate collaboration among team members. It offers a seamless experience for users / admins to manage projects, tasks, and deadlines.",
        technologies: ['MongoDB', 'Express.JS', 'Node.js', 'ReactJS', "TypeScript", "Redux", "TailwindCSS"],
    },
    {
        link: "https://github.com/Dev750wala/short-URL",
        image: shortURLImage,
        title: "URL Shortener",        
        description: "designed to provide a more convenient and efficient way to manage long URLs. Built using MongoDB, Express, and NodeJS, it offers a robust and scalable solution for URL management.",
        technologies: ['MongoDB', 'Express.JS', 'Node.js', 'EJS'],
    },
    {
        link: "https://github.com/Dev750wala/India-states",
        image: indiaStatesImage,
        title: "India States",
        description: "Python-based quiz game designed with the help of Turtle to test your knowledge of the states in India. The game prompts users to input the names of Indian states, and for each correct answer, the user's score increases.",
        technologies: ['Python'],
    },
];


export const education = [
    {
        year: "2022 — PRESENT",
        name: "SCET, Surat",
        description: "I am currently pursuing a bachelor's degree in Computer Engineering while delving deeply into web development technologies."
    },
    {
        year: "2020 — 2022",
        name: "P. P. Savani Vidhyabhavan",
        description: "I completed my JEE and GUJCET examinations, achieving a percentile rank of 90.62."
    },
]

export const Love_Ending = "Made with 💖 and with the blessings of Hari🦚. Coded in Visual Studio Code. Built with React.js and Tailwind CSS, and deployed with Vercel."


// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
