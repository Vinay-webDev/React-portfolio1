import './Projects.css';
import randomquote from '../../assets/projects/randomquote.png';
import snake from '../../assets/projects/snake.png';
import rock from '../../assets/projects/rock2.png';
import calculator from '../../assets/projects/calc2.png';
import pythagarus from '../../assets/projects/pytha2.png';
import stupidapp from '../../assets/projects/stupidapp1.png';
import theme from '../../assets/new/textund.png';
import arrow from '../../assets/arrowright3.png';

const projectsList = [
  {
    id: 1,
    name: "Urban Shop🛒🛍️",
    description: "An app that generates random quotes.",
    tech: ["React", "Nodejs", "Expressjs", "Zustand", "MongoDB", "TailwindCSS"],
    img: randomquote,
    github: "https://github.com/Vinay-webDev/UrbanShop.git",
    live: "https://urban-shop-0b7p.onrender.com"
  },
  {
    id: 2,
    name: "Product Store📦",
    description: "A simple snake game built with JavaScript.",
    tech: ["React", "Nodejs", "Expressjs", "MongoDB", "Zustand", "ChakraUI"],
    img: snake,
    github: "https://github.com/Vinay-webDev/ProductStore-MERN.git",
    live:"https://product-store-qxxv.onrender.com"
  },
  {
    id: 3,
    name: "Personal Portfolio👤🏠",
    description: "Play Rock Paper Scissors against AI.",
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    img: rock,
    github: "https://github.com/Vinay-webDev/js-sq-new-ui-rock-paper-scissors.git",
    live: ""
  },
  
];

const certifications = [
  {
    id: 1,
    name: "javascript",
    description: "",
    projects: [
      {
        id: 1,
        name:"Palindrome checker",
        github: "",
        live: ""
      },
      {
        id: 2,
        name:"Validate number",
        github: "",
        live: ""
      },
      {
        id: 3,
        name:"Roman numeral converter",
        github: "",
        live: ""
      },
      {
        id: 4,
        name:"Cash register app",
        github: "",
        live: ""
      },
      {
        id: 5,
        name:"Pokémon search app",
        github: "",
        live: ""
      },
    ],
    img: rock,
    github: "https://github.com/Vinay-webDev/js-sq-new-ui-rock-paper-scissors.git",
    live: ""
  }
]

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
        live: ""
      },
      {
        id: 2,
        name:"Snake game",
        github: "",
        live: ""
      },
      {
        id: 3,
        name:"Rock paper scissors",
        github: "",
        live: ""
      },
      
      {
        id: 9,
        name:"Basic calculator",
        github: "",
        live: ""
      },
    ],
    img: randomquote,
    github: "https://github.com/Vinay-webDev/UrbanShop.git",
    live: "https://urban-shop-0b7p.onrender.com"
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
                <a href={project.live} className="more">
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
              <img src={item.img} alt={item.name} className="certification-img" />
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



/*
<div id="projects" className="projects">
        <div className="projects-title">
            <h1>Projects</h1>
            <img src={theme} alt="theme"/>
        </div>
        <div className="projects-container">
            {projectsList.map((project, id) => {
                return <a href={project.target} ><img key={id} src={project.img} alt={project.name}/></a> 
            })}
        </div>
        <a className="show-more-main" href="https://github.com/Vinay-webDev">
          <div className="show-more">
              <p>Show more</p>
              <img src={arrow} alt="right-arrow"/>
          </div>
        </a>
    </div>
*/



/*
const projectsList = [
                        { id:'1',
                          name:'random quote machine',
                          img: randomquote,
                          target:'https://github.com/ninjaprogrammer2999/freeCodeCamp-project1-random-quote-machine'
                        },
                        {id:'2',
                         name:'snake',
                         img: snake,
                         target:'https://github.com/ninjaprogrammer2999/js-snake-game'
                        },
                        {id:'3',
                         name:'rock paper scissors',
                         img: rock,
                         target:'https://github.com/ninjaprogrammer2999/js-sq-new-ui-rock-paper-scissors'
                        },
                        {id:'4',
                         name:'calculator',
                         img:calculator,
                         target:'https://github.com/ninjaprogrammer2999/Js_CALCULATOR'
                        },
                        {id:'5',
                         name:'pythagorian triplets',
                         img:pythagarus,
                         target:'https://github.com/ninjaprogrammer2999/js-sq3-pythagorian-triplets'
                        },
                        {id:'6',
                         name:'expense app',
                         img:stupidapp,
                         target:'https://github.com/ninjaprogrammer2999/js-sq4-expense-program'
                        }
]
*/