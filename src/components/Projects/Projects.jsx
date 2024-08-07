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
                        },
                        {id:'2',
                         name:'snake',
                         img: snake
                        },
                        {id:'3',
                         name:'rock paper scissors',
                         img: rock
                        },
                        {id:'4',
                         name:'calculator',
                         img:calculator
                        },
                        {id:'5',
                         name:'pythagorian triplets',
                         img:pythagarus
                        },
                        {id:'6',
                         name:'expense app',
                         img:stupidapp
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
                return <img key={project.id} src={project.img} alt={project.name}/> 
            })}
        </div>
        <div className="show-more">
            <p>Show more</p>
            <img src={arrow} alt="right-arrow"/>
        </div>
    </div>
  );
}

export default Projects



/*<img key={project.id} src={project.img} alt={project.name}/>*/