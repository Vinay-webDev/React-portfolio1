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
    tech: ["React", "Nodejs", "Expressjs", "Zustand", "MongoDB", "Redis", "Stripe", "Cloudinary","TailwindCSS"],
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

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
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
      </div>
      <a className="show-more-main" href="https://github.com/Vinay-webDev">
        <div className="show-more">
          <p>Show more</p>
          <img src={arrow} alt="right-arrow" />
        </div>
      </a>
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
]*/