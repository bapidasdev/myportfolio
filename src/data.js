
import images from "./constants/images"

const skills = [
    { name: 'HTML', imgUrl: images.html },
    { name: 'CSS', imgUrl: images.css },
    { name: 'Javascript', imgUrl: images.javascript },
    { name: 'React', imgUrl: images.react },
    { name: 'Redux', imgUrl: images.redux },
    { name: 'Github', imgUrl: images.git },
    { name: 'Material Ui', imgUrl: images.mu5 }
]

const abouts = [
    {
        title: 'Frontend Development',
        description: 'I am an aspiring web developer with around one year hands on experience, with a strong foundation in HTML, CSS, and Javascript ',
        imgUrl: images.frontD
    },
    {
        title: 'React Development',
        description: "I am an experienced in React, especially with tools like Hooks, Context API, and advanced frameworks like Redux and Redux-Saga, positions I well for building highly dynamic and state-driven applications. Whether i am  optimizing performance with the Virtual DOM or managing complex state logic, i ve got a solid foundation to tackle a wide range of projects.",
        imgUrl: images.reactD
    },
]

const worksArr = [
    {
        title: 'QR code generator',
        description: 'Created a web-based QR code generator app using HTML, CSS Javascripit',
        tag: "html & css & javascript project",
        imgUrl: images.work01,
        projectLink: "https://delightful-hummingbird-2ec860.netlify.app",
        codeLink: "https://delightful-hummingbird-2ec860.netlify.app"
    },
    {
        title: 'LOGIN & REGISTER',
        description: 'Created a web-based LOGIN & REGISTER App  using React',
        tag: "React Project",
        imgUrl: images.login_register,
        projectLink: "https://bapidev-login-web.netlify.app",
        codeLink: "https://bapidev-login-web.netlify.app"
    },
    {
        title: 'TIC TAC TOE Game',
        description: 'Created a web-based Tic-Tac-Toe game using HTML, CSS, and Javascript',
        tag: "html & css & javascript project",
        imgUrl: images.ticGame,
        projectLink: "https://tic-tac-toc-game18.netlify.app/",
        codeLink: "https://tic-tac-toc-game18.netlify.app/"
    },
     {
        title: 'E-commerce Website ',
        description: 'Created a web-based E-commerce app using React',
        tag: "React Project",
        imgUrl: images.eCommerce,
        projectLink: "https://kd-skin-protection.netlify.app/",
        codeLink: "https://kd-skin-protection.netlify.app/"
    },
    {
        title: 'CRUD APP ',
        description: 'Created a web-based Crud App  using React, react-redux and redux-toolkit',
        tag: "React Project",
        imgUrl: images.crudApp,
        projectLink: "https://crud-app18.netlify.app/",
        codeLink: "https://crud-app18.netlify.app/"
    },
    
    {
        title: 'React Admin Dashboard',
        description: 'I created a Admin dashboard using React',
        tag: "React Project",
        imgUrl: images.work02,
        projectLink: "https://github.com/bapidasdev/AdminDashboard",
        codeLink: "https://github.com/bapidasdev/AdminDashboard"
    },
    {
        title: 'JOB_PORTAL',
        description: 'I created a job portal website using React',
        tag: "React Project",
        imgUrl: images.job_portal,
        projectLink: "https://job-portal-hzbh.onrender.com/",
        codeLink: "hhttps://github.com/bapidasdev/job__portal"
    },

]

export default {skills,abouts,worksArr}
