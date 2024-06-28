import shortURLImage from './Photos/project-url-shortener.png';
import snakeGameImage from './Photos/project-snake-game.png';
import indiaStatesImage from './Photos/project-india.jpg';

// LEFT BIO
export const L_bio = {
    bio: "I am learning full stack web development. Crafting digital experiences, end to end.",
};

// RIGHT BIO
export const R_bio = {
    p1: 
        "Back in 2022, I decided to try my hand at web development and tumbled headfirst into the rabbit hole of   coding and web development. Fast-forward to today, and I've had a great journey of learning new technologies and tools.",
    p2: 
        "I focus on building personal and college projects, enjoying the challenge of integrating backend functionality with robust security. In my free time, I immerse myself in cybersecurity and tech news, constantly expanding my expertise to enhance digital security.",
    p3: 
        "When I'm not engrossed in learning, I enjoy taking some downtime to unwind. This usually involves cozying up with a good movie, getting lost in the pages of a book, exploring new places on spontaneous adventures, and, of course, making friends with the neighborhood cats."
}

// PROJECTS
export const projects = [
    {
        link: "https://github.com/Dev750wala/short-URL",
        image: shortURLImage,
        title: "URL Shortener",        
        description: "designed to provide a more convenient and efficient way to manage long URLs. Built using MongoDB, Express, and NodeJS, it offers a robust and scalable solution for URL management.",
        technologies: ['MongoDB', 'Express.JS', 'Node.js', 'EJS'],
    },
    {
        link: "https://github.com/Dev750wala/Snake_Game",
        image: snakeGameImage, 
        title: "Snake Game",
        description: "Don't you remember the good old days of gaming when you spent hours chasing that pixelated snake on your Nokia phone? Here is what I have made the simple version of that game.",
        technologies: ['Python'],
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
        year: "2022 — 2026",
        name: "SCET, Surat",
        description: "I am currently pursuing a bachelor's degree in Computer Engineering while delving deeply into web development technologies."
    },
    {
        year: "2020 — 2022",
        name: "P. P. Savani Vidhyabhavan",
        description: "I completed my JEE and GUJCET examinations, achieving a percentile rank of 90.62."
    },
]

export const Love_Ending = "Made with 💖 and with the blessings of Hari🦚. Coded in Visual Studio Code by yours truly. Built with React.js and Tailwind CSS, and deployed with Vercel."

export const technologies = [
    { name: 'HTML', value: 75 },
    { name: 'CSS', value: 65 },
    { name: 'Tailwind', value: 70 },
    { name: 'NodeJS', value: 62 },
    { name: 'Express.JS', value: 52 },
    { name: 'Python', value: 80 },
    { name: 'MongoDB', value: 64 },
    { name: 'PostgresSQL', value: 52 },
    { name: 'React', value: 67 },
    { name: 'Next.JS', value: 54 },
];




// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch