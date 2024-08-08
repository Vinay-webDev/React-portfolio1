import React from 'react';
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




const Projects = () => {
  return (
    <div id="projects" className="projects">
        <div className="projects-title">
            <h1>Some Fun Projects</h1>
            <img src={theme} alt="theme"/>
        </div>
        <div className="projects-container">
            {projectsList.map((project, id) => {
                return <a href={project.target} ><img key={project.id} src={project.img} alt={project.name}/></a> 
            })}
        </div>
        <a className="show-more-main" href="https://github.com/ninjaprogrammer2999">
          <div className="show-more">
              <p>Show more</p>
              <img src={arrow} alt="right-arrow"/>
          </div>
        </a>
    </div>
  );
}

export default Projects



/*<img key={project.id} src={project.img} alt={project.name}/>*/