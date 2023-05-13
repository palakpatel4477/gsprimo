import React from 'react'
import '../css/Career.css'
import Image from '../images/career3.jpeg'
import CareerDescription from '../Components/CareerDescription'
import Footer from '../Components/Footer'
import AboutUsContactSection from '../Components/AboutUsContactSection'
import RandDDescription from '../Components/RandDDescription'

const RandD = () => {
  return (
    <>
      {/* <div className="image-container-career">
        <div className="overlay-randd"></div>
        <img src={Image} alt="image-description-career" />
        <div className="text-container-career">
          <h1>R & D</h1>
        </div>
      </div> */}
      <section className="hero-randd">
        {/* <img src={Image} alt="image-description-career" /> */}
        <div className="overlay-services"></div>
        <div className="text-container-project">
          <h1>R & D</h1>
        </div>
      </section>
      {/* <CareerDescription/> */}
      <RandDDescription/>
      <AboutUsContactSection/>
      <Footer/>
    </>
  )
}

export default RandD