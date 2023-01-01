import React from 'react'
import Heading from './../components/Landing/heading/Heading'
import NumberProud from './../components/Landing/numberProud/NumberProud'
import Message from '../components/Landing/Message/Message'
import Navbar from '../components/Landing/Navbar/Navbar'
import HeroSection from '../components/Landing/SectionHero/HeroSection'
import Work from '../components/Landing/Works/Work'
import TrainingProgram from './../components/Landing/trainingProgram/leftImagesProgram/LeftTrainingProgram'
import RightTrainingProgram from './../components/Landing/trainingProgram/rightImagesProgram/RightTrainingProgram'
import ContactUs from './../components/Landing/contactUs/ContactUs'
import Footer from './../components/Landing/footer/Footer'

function Landing() {
  return (
    <div>
      
      <Navbar />
      <HeroSection />
      <Message />
      <Work />
      <div className='container'>
      <Heading headTitle='أرقام نفخر فيها'/>
      <NumberProud/>
      <Heading headTitle='برامجنا التدريبية'/>
      <TrainingProgram/>
      <RightTrainingProgram/>
    </div>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Landing