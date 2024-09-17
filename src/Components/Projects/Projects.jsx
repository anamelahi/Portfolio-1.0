import React from 'react'
import "./Projects.css"
import TechStack from './TechStack'

const Projects = (props) => {
  function handleClick(){
    window.open(props.link,'_blank')
  }
  return (
    <div className='project-div'>
        <img src={props.image} alt="" />
        <h3>{props.heading}</h3>
        <p className='p1'>{props.duration}</p>
        <p>{props.content}</p>

        <div className="techs">
        <TechStack tech="MERN" />
        <TechStack tech={props.techname} />
        </div>
        <button className='src-code' onClick={handleClick}>Source Code</button>
      
    </div>
  )
}

export default Projects