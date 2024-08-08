import React from 'react'
import './Topics.css';
import theme from '../../assets/new/textund.png';
import arrow from '../../assets/arrowright3.png';


const favoriteTopics = [
                        { id:'1',
                          name:'Web Design',
                          des:'The process of creating the...',
                          target:'https://en.wikipedia.org/wiki/Web_design'
                        },
                        { id:'2',
                          name:'Web Dev',
                          des:'The process of building and...',
                          target:'https://en.wikipedia.org/wiki/Web_development'
                        },
                        { id:'3',
                          name:'DSA',
                          des:'Organized ways to store and...',
                          target:'https://en.wikipedia.org/wiki/Data_structure'
                        },
                        { id:'4',
                          name:'Front-end',
                          des:'The client-side part of web...',
                          target:'https://en.wikipedia.org/wiki/Front-end_web_development'
                        },
                        { id:'5',
                          name:'React.js',
                          des:'A JavaScript library for build...',
                          target:'https://en.wikipedia.org/wiki/React_(JavaScript_library)'
                        },
                        { id:'6',
                          name:'Back-end',
                          des:' The server-side part of a web...',
                          target:'https://en.wikipedia.org/wiki/Back_end'
                        },
                        { id:'7',
                          name:'Node.js',
                          des:'A runtime environment that...',
                          target:'https://en.wikipedia.org/wiki/Node.js'
                        },
                        { id:'8',
                          name:'TypeScript',
                          des:'A typed superset of javascript...',
                          target:'https://en.wikipedia.org/wiki/TypeScript'
                        }
];


const Topics = () => {
  return (
    <div id="topics" className="topics">
      <div className="topics-title">
        <h1>My favorite topics</h1>
        <img src={theme} alt="theme" />
      </div>
      <div className="topics-container">
        {favoriteTopics.map((topic, id)=>{
          return <a href={topic.target}>
                  <div key={id} className="topics-format">
                    <h3>{topic.id}</h3>
                    <h2>{topic.name}</h2>
                    <p>{topic.des}</p>
                    <div className="read-more">
                      <p>Read more</p>
                      <img src={arrow} alt="right-arrow" />
                    </div>
                  </div>
                  </a>
        })}
      </div>
    </div>
  );
}

export default Topics