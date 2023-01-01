import React from 'react'
import './NumberProud.css'
import {FaGraduationCap} from 'react-icons/fa'
function NumberProud() {
  return (
    <div>
        <div className='numpers-container' id='number'>
            <div className='numper-item'>
                <FaGraduationCap className='icon'/>
                <h2>250+</h2>
                <p>عدد الخريجين</p>
            </div>
            <div className='numper-item'>
                <FaGraduationCap className='icon'/>
                <h2>250+</h2>
                <p>عدد الخريجين الاناث</p>
            </div>
            <div className='numper-item'>
                <FaGraduationCap className='icon'/>
                <h2>250+</h2>
                <p>قصص نجاح</p>
            </div>
            <div className='numper-item'>
                <FaGraduationCap className='icon'/>
                <h2>250+</h2>
                <p>متدرب ومتطوع</p>
            </div>

        </div>
        
    </div>
  )
}

export default NumberProud