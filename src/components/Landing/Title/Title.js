import React from 'react'
import "./Title.css";

function Title(props) {
  return (
    <div className='title'>
        
    {props.name}
    </div>
  )
}

export default Title