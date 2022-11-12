import React from 'react';
import './Portfolio.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'
const data=[
    {
        id:1,
        image:"https://i.imgur.com/EPyMxnj.jpg",
        title:"Yard Sale",
        demo:"https://roiber21.github.io/e-commerce--Yard-sale/",
        github:"https://github.com/Roiber21/e-commerce--Yard-sale",
        color:"#FF5454",
        description:"It's a React.js SPA from a fictional mini store. The project consists of different views and pages accessed by React Router routes. It has a responsive web design",
        clase:'image_project',
    },
    {
        id:2,
        image:"https://i.imgur.com/ZiM781L.jpg",
        title:"Book a fly",
        demo:"https://roiber21.github.io/states-machines-react.js/",
        github:"https://github.com/Roiber21/states-machines-react.js",
        color:"#9C91E7",
        description:"implementation of a flow of buying tickets for a flight Multiple passengers can be added.At any time I can cancel the purchase and return to the initial state.There is a list of flights to select from.",
        clase:'image_project'
    },
    {
        id:3,
        image:"https://i.imgur.com/5p02K3q.jpg",
        title:"Movie App",
        demo:"https://roiber21.github.io/API-rest-profesional/",
        github:"https://github.com/Roiber21/API-rest-profesional",
        color:"rgba(53, 110, 152, 0.84)",
        description:"Single Page Application con hash navigation.consumo de api rest TheMovieDB",
        clase:'image_project'
    },
    {
        id:4,
        image:"https://i.imgur.com/CtWsoTk.jpg",
        title:"Petgram",
        demo:"https://petgram-roiber.vercel.app/",
        github:"https://github.com/Roiber21/Petgram-app",
        color:"rgba(0, 74, 185, 0.22)",
        description:"App to upload and share pet photos using Webpack, GraphQL, React Hooks, React Router, SEO and PWAs.",
        clase:'image_project2'
    },
    {
        id:5,
        image:"https://i.imgur.com/aseZIfE.jpg",
        title:"Conf Merch",
        demo:"https://platzi-merch-c10d4.web.app/",
        github:"https://github.com/Roiber21/merch-platz",
        color:"rgba(14, 103, 163, 0.84)",
        description:"online store with React",
        clase:'image_project'
    },
    {
        id:6,
        image:"https://i.imgur.com/3JAQxr2.jpg",
        title:"Searcher",
        demo:"https://search-github-profile2022.netlify.app/",
        github:"https://github.com/Roiber21/materialUI-react",
        color:"rgba(189, 179, 175, 0.74)",
        description:"a github user browser, the application will make a request and render the data received as a response",
        clase:'image_project'
    },
    {
        id:7,
        image:"https://i.imgur.com/oTmtqoj.jpg",
        title:"Avocados",
        demo:"https://roiber21.github.io/platzi-DOM1",
        github:"https://github.com/Roiber21/platzi-DOM1",
        color:"rgba(219, 214, 143, 0.78)",
        description:"DOM manipulation with javascript",
        clase:'image_project'
    },
    {
        id:8,
        image:"https://i.imgur.com/8hhts3l.jpg",
        title:"React Hooks",
        demo:"https://react-hooks-bice-phi.vercel.app/",
        github:"https://github.com/Roiber21/React-hooks",
        color:"rgba(133, 72, 112, 0.76)",
        description:"hook implementation",
        clase:'image_project'
    },
    
]

const Portfolio = () => {
    return (
        <section id='projects' >
            <h1 className="title_projects" >Projects</h1>
          {
            data.map(({id, image,title,demo,github,color,description, clase}) =>{
                return (
                <main key={id} style={{
                    backgroundColor:color
                }} className="container_projects">
                    <a  href={demo} target='_blank'>
                        <h1 className="title_skills" >{title}</h1>
                    </a> 
                    <span className='details_projects '> {description}</span>
                    <a className='redirect_image' href={demo} target='_blank'>
                        <img   className={clase} src={image} alt={title} />
                     </a>
    
                    <div className='buttons_projects'>
                        <a href={github} target='_blank' className='button_projects'>Go to Github <AiOutlineArrowRight/></a>
                        <a href={demo} target='_blank' className='button_projects'>Go to Demo <AiOutlineArrowRight/></a>
                    </div>
    
    
    
                </main>
                )
            })
          }
        </section>
    );
}

export default Portfolio;