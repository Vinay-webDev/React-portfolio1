import React from 'react'
import './Topics.css';
import theme from '../../assets/new/textund.png';
import arrow from '../../assets/arrowright3.png';


const favoriteTopics = [
                        { id:'1',
                          name:'Web Design',
                          des:'The process of creating the visual layout user...'
                        },
                        { id:'2',
                          name:'Web Development',
                          des:'The process of building and maintaining websites...'
                        },
                        { id:'3',
                          name:'DSA',
                          des:'Organized ways to store and manipulate data...'
                        },
                        { id:'4',
                          name:'Front-end',
                          des:'The client-side part of web development dealing...'
                        },
                        { id:'5',
                          name:'React.js',
                          des:'A JavaScript library for building user interfaces...'
                        },
                        { id:'6',
                          name:'Back-end',
                          des:' The server-side part of web development...'
                        },
                        { id:'7',
                          name:'Node.js',
                          des:'A runtime environment that allows you to run...'
                        },
                        { id:'8',
                          name:'TypeScript',
                          des:'A typed superset of JavaScript that adds static...'
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
          return <div key={id} className="topics-format">
                  <h3>{topic.id}</h3>
                  <h2>{topic.name}</h2>
                  <p>{topic.des}</p>
                  <div className="read-more">
                    <p>Read more</p>
                    <img src={arrow} alt="right-arrow" />
                  </div>
                </div>
        })}
      </div>
    </div>
  );
}

export default Topics