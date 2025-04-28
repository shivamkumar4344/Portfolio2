import { Container, Button } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import P2img1 from './assets/Projects/Project2_1.png';
import P2img2 from './assets/Projects/Project2_2.png';
import P2img3 from './assets/Projects/Project2_3.png';
import P3img1 from './assets/Projects/Project3_1.png';
import P3img2 from './assets/Projects/Project3_2.png';
import P3img3 from './assets/Projects/Project3_3.png';
import P3img4 from './assets/Projects/Project3_4.png';
import P3img5 from './assets/Projects/Project3_5.png';
import P4img1 from './assets/Projects/Project4_1.png';
import P4img2 from './assets/Projects/Project4_2.png';
import P4img3 from './assets/Projects/Project4_3.png';
import P1img1 from './assets/Projects/Project1_1.png';
import P1img2 from './assets/Projects/Project1_2.png';
import P1img3 from './assets/Projects/Project1_3.png';
import ProjectCarousel from './Components/ProjectCarousel';

const ProjectCard = ({ info, index }) => {
    const projectRef = useRef(null);
    const isInView = useInView(projectRef, {
        once: false,
        margin: "-50px"
    });

    return (
        <motion.div
            ref={projectRef}
            className={`project-box ${index % 2 === 1 ? 'reverse' : ''}`}
            initial={{
                x: index % 2 === 0 ? -100 : 100,
                opacity: 0
            }}
            animate={isInView ? {
                x: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    stiffness: 100,
                    duration: 0.5
                }
            } : {
                x: index % 2 === 0 ? -100 : 100,
                opacity: 0
            }}
            whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 400 }
            }}
        >
            <motion.div
                className='project-carousel'
                initial={{ opacity: 0 }}
                animate={isInView ? {
                    opacity: 1,
                    transition: { delay: 0.2 }
                } : { opacity: 0 }}
            >
                <ProjectCarousel images={info.img} />
            </motion.div>
            <motion.div
                className='project-info'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3 }
                } : {
                    opacity: 0,
                    y: 20
                }}
            >
                <motion.h1 className='mt-0'>{info.heading}</motion.h1>
                <motion.p>{info.description}</motion.p>
                <motion.div className='mb-3 d-flex flex-wrap'>
                    {info.tech.map((tech, ind) => (
                        <motion.div
                            key={ind}
                            className='project-tech'
                            initial={{ opacity: 0 }}
                            animate={isInView ? {
                                opacity: 1,
                                transition: { delay: 0.4 + (ind * 0.1) }
                            } : { opacity: 0 }}
                            whileHover={{
                                scale: 1.1,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                            {tech}
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? {
                        opacity: 1,
                        transition: { delay: 0.5 }
                    } : { opacity: 0 }}
                >
                    <Button
                        href={info.live}
                        target='_blank'
                        variant='light'
                        className='me-1 me-sm-3 p-btn'
                    >
                        Preview..
                    </Button>
                    <Button
                        href={info.github}
                        target='_blank'
                        variant='light'
                        className='p-btn'
                    >
                        Github Repository
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default function Projects() {
    const data = [
        {
            img: [P1img1, P1img2, P1img3],
            heading: "CloudBouncer: CyberSecurity App",
            live: "https://cloudbouncer-demo-frontend.onrender.com/",
            github: "https://github.com/CLOUD-BOUNCER-TOOL/DDOS",
            description: 'CloudBouncer is a cutting-edge cybersecurity app designed to prevent DDoS attacks and enhance security through AI-driven authorization and authentication. Built using the MERN stack, to deliver a robust and scalable solution. The comprehensive dashboard displays all relevant analytics, including graphs and pie charts, providing users with clear and actionable insights into their security status..',
            tech: ["MongoDb", "Express.Js", "Node.Js", "React.Js", "Python"]
        },
        {
            img: [P2img1, P2img2, P2img3],
            heading: "To Do Master App",
            live: "https://to-do-master-main.vercel.app/",
            github: "https://github.com/shivamkumar4344/Notes_App_MERN",
            description: 'The app features functionalities are task creation, updating, and deletion, allowing users to organize their tasks effortlessly.Additionally, it includes user profile creation, updating, and deletion, ensuring users can securely manage their profiles.I created a seamless and user-friendly application that provides a reliable platform for managing both user information and tasks.',
            tech: ["MongoDb", "Express.Js", "Node.Js", "React.Js"]
        },
        {
            img: [P4img1, P4img2, P4img3],
            heading: "Artistic Art Gallery",
            github: 'https://github.com/shivamkumar4344/laravelArtGallery',
            live: "https://weather-cast-project.vercel.app/1",
            description: 'The Virtual Art Gallery is a web platform built using Laravel, following the MVC architecture.It provides a space for local artists to showcase and promote their artwork online.The gallery features a clean, responsive design and smooth navigation for all users.MySQL is used to efficiently manage artist profiles, artwork listings, and user interactions.The platform focuses on supporting emerging artists while offering a seamless user experience.',
            tech: ["Laravel", "PHP", "Tailwind", "MySQL"]
        },
        {
            img: [P3img1, P3img2, P3img3, P3img4, P3img5],
            heading: "Daily Blog: A News Website",
            live: "https://abhay-bharti.github.io/Agriter/1",
            github: "https://github.com/shivamkumar4344/DailyBlog-News-Website",
            description: "Daily Blog is a modern news website built with HTML, CSS, JavaScript, jQuery, and Bootstrap.It offers a clean, responsive, and user-friendly interface for a smooth reading experience.The website features dynamic content loading and interactive elements for better engagement.Bootstrap ensures mobile responsiveness, making it accessible across all devices.Daily Blog delivers the latest news efficiently with a focus on design and performance.",
            tech: ["HTML5", "CSS3", "Javascript", "Bootstrap", "JQuery"]
        },
    ]

    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, {
        once: false,
        margin: "-50px"
    });

    return (
        <>
            <Container id='Project'>
                <motion.h1
                    ref={headerRef}
                    className='text-center Contact-heading'
                    initial={{ opacity: 0, y: -20 }}
                    animate={headerInView ? {
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            stiffness: 100
                        }
                    } : {
                        opacity: 0,
                        y: -20
                    }}
                >
                    My Projects
                </motion.h1>
                {data.map((info, index) => (
                    <ProjectCard
                        key={index}
                        info={info}
                        index={index}
                    />
                ))}
            </Container>
        </>
    )
}
