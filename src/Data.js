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
        image: "src/Photos/project-url-shortener.png",
        title: "URL Shortener",        
        description: "designed to provide a more convenient and efficient way to manage long URLs. Built using MongoDB, Express and NodeJS, it offers a robust and scalable solution for URL management."
    },
    {
        link: "https://github.com/Dev750wala/Snake_Game",
        image: "src/Photos/project-snake-game.png",
        title: "Snake Game",
        description: "Don't you remember the good old days of gaming when you spent hours chasing that pixelated snake on your Nokia phone? Here is what I have made the simple version of that game."
    },
    {
        link: "https://github.com/Dev750wala/India-states",
        image: "src/Photos/project-india.jpg",
        title: "India States",
        description: "Python-based quiz game designed with the help of Turtle to test your knowledge of the states in India. The game prompts users to input the names of Indian states, and for each correct answer, the user's score increases."
    },
]

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

// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch