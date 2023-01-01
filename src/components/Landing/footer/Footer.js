import React from 'react'
import './Footer.css'
import {FiFacebook} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
import {AiFillLinkedin, AiOutlineArrowUp} from 'react-icons/ai'
function Footer() {
  return (
    <div className='footer-container'>
        <a className='to-top' href='#top'><AiOutlineArrowUp /></a>
        <div className='container footer-flex'>
            
        <div className='copywrite'>
            <p>copyright © 2021 all rights reserved</p>
        </div>
        
        <div className='footer-nav'>
            <ul>
                <li>الرئيسية</li>
                <li>رسالتنا و رؤيتنا</li>
                <li> أعمالنا</li>
                <li>برامجنا</li>
                <li>تواصل معنا</li>
            </ul>
        </div>
        <div className='follow-us'>
            <p>Follow us</p>
            <FiFacebook className='follow-icon'/>
            <FaInstagram className='follow-icon'/>
            <AiFillLinkedin className='follow-icon'/>
        </div>


        </div>
    </div>
  )
}
export default Footer