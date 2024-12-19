import './Projects.css';
import arrow from '../../assets/arrowright3.png';
import mini from '../../assets/projects/miniprojects.png';
import urbanShop from '../../assets/projects/urbanshop.png';
import productStore from '../../assets/projects/productstore.png';
import portfolio from '../../assets/projects/portfolio.png';
import jsCertificate from '../../assets/certificates/vinayhc.png';

const projectsList = [
  {
    id: 1,
    name: "Urban Shop🛒🛍️",
    description: "A E-commerce website with urban style brands",
    tech: ["React", "Nodejs", "Expressjs", "Zustand", "MongoDB", "TailwindCSS"],
    img: urbanShop,
    github: "https://github.com/Vinay-webDev/UrbanShop.git",
    live: "https://urban-shop-0b7p.onrender.com"
  },
  {
    id: 2,
    name: "Product Store📦",
    description: "A simple MERN stack with CRUD functionalities",
    tech: ["React", "Nodejs", "Expressjs", "MongoDB", "Zustand", "ChakraUI"],
    img: productStore,
    github: "https://github.com/Vinay-webDev/ProductStore-MERN.git",
    live:"https://product-store-qxxv.onrender.com"
  },
  {
    id: 3,
    name: "Personal Portfolio👤🏠",
    description: "Play Rock Paper Scissors against AI.",
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    img: portfolio,
    github: "https://github.com/Vinay-webDev/js-sq-new-ui-rock-paper-scissors.git",
    live: ""
  },
  
];



const miniProjects = [
  {
    id: 1,
    name: "mini projects",
    description: "mini projects",
    links: [
      {
        id: 1,
        name:"Random quote machine",
        github: "",
        live: "https://randomquotemachine-vinayhc.vercel.app"
      },
      {
        id: 2,
        name:"Snake game",
        github: "",
        live: "https://snake-game-vinayhc.vercel.app"
      },
      {
        id: 3,
        name:"To-do-list",
        github: "",
        live: "https://to-do-list-vinayhc.vercel.app"
      },
      {
        id: 4,
        name:"Rock paper scissors",
        github: "",
        live: "https://rock-paper-scissors-vinayhc.vercel.app"
      },
      
      {
        id: 5,
        name:"Basic calculator",
        github: "",
        live: "https://calculator-vinayhc.vercel.app"
      },
      
    ],
    img: mini,
    github: "https://github.com/Vinay-webDev/UrbanShop.git",
    live: "https://urban-shop-0b7p.onrender.com"
  }
];

const certifications = [
  {
    id: 1,
    name: "Javascript Algorithms and Data Structures",
    description: "certification projects👇",
    projects: [
      {
        id: 1,
        name:"Project 1",
        github: "",
        live: "https://codepen.io/VINAY-H-C/pen/OJKXZzo"
      },
      {
        id: 2,
        name:"Project 2",
        github: "",
        live: "https://codepen.io/VINAY-H-C/pen/gOVMzvj"
      },
      {
        id: 3,
        name:"Project 3",
        github: "",
        live: "https://codepen.io/VINAY-H-C/pen/PoMeEzZ"
      },
      {
        id: 4,
        name:"Project 4",
        github: "",
        live: "https://codepen.io/VINAY-H-C/pen/RwXyxGw"
      },
      {
        id: 5,
        name:"Project 5",
        github: "",
        live: "https://codepen.io/VINAY-H-C/pen/gOVzora"
      },
    ],
    img: jsCertificate,
    codePen: "https://github.com/Vinay-webDev/js-sq-new-ui-rock-paper-scissors.git",
    live: "https://www.freecodecamp.org/certification/vinayhc/javascript-algorithms-and-data-structures-v8"
  }
];

const Projects = () => {
  
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      {/* projectsList */}
      <div className="projects-container">
        {projectsList.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.img} alt={project.name} className="project-img" />
            <div className="project-info">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>
              <div className='button-container'>
                <a href={project.github} className="more">
                  GitHub
                </a>
                <a title="it will take 30 - 40s please wait I'm on free tier😁" href={project.live} className="more">
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      {/*///////////////mini projects//////////////////////// */}
        <div className="projects-container">
          {miniProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.img} alt={project.name} className="project-img" />
                <div className="project-info">
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.links.map((item) => (
                      <div className='button-container'>
                        <a href={item.live} className="more-new">
                          {item.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          ))}
        </div>
      {/*////////////////////////////////////////////////////////////// */}
      </div>
      <a className="show-more-main" href="https://github.com/Vinay-webDev">
        <div className="show-more">
          <p>Show more</p>
          <img src={arrow} alt="right-arrow" />
        </div>
      </a>
      {/*////////////////certifications///////////////////// */}
      <div className="certifications-title">
        <h1>Certifications</h1>
      </div>
        <div className="projects-container">
          {certifications.map((item) => (
            <div key={item.id} className="project-card">
              <img src={item.img} title="👉click to go to certificate page" href={item.live} alt={item.name} className="certification-img" onClick={() => window.open(item.live, '_blank')}  />
              <div className="project-info">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <div className="project-tech">
                  {item.projects.map((project) => (
                    <div className='button-container'>
                      <a href={project.live} className="more-new">
                        {project.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Projects