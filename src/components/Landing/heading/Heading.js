import React from 'react'
import './Heading.css'
 function Heading(props) {
  return (
    <div className='header-container'>
        <h2 className='heading'>{props.headTitle}</h2>
        <span className='line'></span>
    </div>
  )
}

export default Heading