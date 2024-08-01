import React from 'react'
import './Topics.css';
import theme from '../../assets/theme2.png';
import arrow from '../../assets/arrow.png';


const favoriteTopics = [
                        { id:'1',
                          name:'Web Design',
                          des:'The process of creating the visual layout, user interface, and user experience of a website.'
                        },
                        { id:'2',
                          name:'Web Development',
                          des:'The process of building and maintaining websites, involving both front-end (client-side) and back-end (server-side) programming.'
                        },
                        { id:'3',
                          name:'Data Structures and Algorithms',
                          des:'Organized ways to store and manipulate data, and step-by-step procedures for solving computational problems.'
                        },
                        { id:'4',
                          name:'Front-end',
                          des:'The client-side part of web development, dealing with the visual aspects and user interactions of a website.'
                        },
                        { id:'5',
                          name:'React.js',
                          des:'A JavaScript library for building user interfaces, particularly single-page applications, using a component-based architecture.'
                        },
                        { id:'6',
                          name:'Back-end',
                          des:' The server-side part of web development, focusing on databases, server logic, and application integration.'
                        },
                        { id:'7',
                          name:'Node.js',
                          des:'A runtime environment that allows you to run JavaScript on the server side, enabling server-side scripting and building scalable network applications.'
                        },
                        { id:'8',
                          name:'TypeScript',
                          des:'A typed superset of JavaScript that adds static types, enhancing code quality and maintainability.'
                        }
];


const Topics = () => {
  return (
    <div className="topics">
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