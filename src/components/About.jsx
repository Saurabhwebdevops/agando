import React from 'react'
import about from '../../public/images/about-us.svg'


const About = () => {
  return (
    <>
      <div className="about-us-container">
        <div className="title__area">
          <h4 className='margin medium'>About Agando</h4>
          <p className='margin'>At Agando, we believe in the power of precision, performance, and personalization. Founded in 1985 in Jever, Germany, we’ve grown from a small tech startup into a trusted name in custom-built PCs and gaming hardware.</p>
          <button className='submit'>View More</button>
         </div>
        <div className="image-area">
         <img src={about} alt="" srcset="" />
        </div>
      </div>
    </>
  )
}

export default About
