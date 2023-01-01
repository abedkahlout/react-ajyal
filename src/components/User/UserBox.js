import React from 'react'
import "./Home.css";

function UserBox(props) {
  return (
    <div className='UserBox'>
            <a>   {props.jops} </a>
            <a>   {props.numjops} </a>


    </div>
  )
}

export default UserBox