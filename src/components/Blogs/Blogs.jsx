import React from 'react'
import "./Blogs.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import Img1 from "../../assets/images/debug_img.jpeg"
import Img2 from "../../assets/images/students_img.jpg"
import Img3 from "../../assets/images/blogs_hackathon.jpg"
import KnowMore from '../KnowMore/KnowMore'

const Blogs = () => {
  return (
      <div className='blogs'>
          <SectionTitle text="Blogs"/>
          <h2 className='section-header'>Uncover Insights in Our Blogs</h2>
          <div className="blog-main">
              <div className="blog-container">
                  <img src={Img1} alt="blog-image" />
                  <div className="blog-details">
                      <h3 className='blog-title'>Debugging Demystified</h3>
                      <p className='blog-description'>Debugging is a critical skill for any programmer, yet it often feels daunting. This blog post aims to demystify the debugging process and provide practical strategies for tackling code issues effectively. We’ll start by discussing common types of bugs and their typical causes, such as syntax errors, logical errors, and runtime exceptions.</p>
                      <KnowMore text="Read More" className="blogs-readmore"/>
                  </div>
              </div>
              <div className="blog-container">
                  <img src={Img2} alt="blog-image" />
                  <div className="blog-details">
                      <h3 className='blog-title'>Spotlight on Student-Driven Initiatives</h3>
                      <p className='blog-description'>Student-driven initiatives are at the heart of campus innovation, bringing fresh ideas and practical solutions to university life. This blog post shines a spotlight on several outstanding projects led by students at Excel Engineering College, showcasing their creativity and impact.</p>
                      <KnowMore text="Read More" className="blogs-readmore"/>
                  </div>
              </div>
              <div className="blog-container">
                  <img src={Img3} alt="blog-image" />
                  <div className="blog-details">
                      <h3 className='blog-title'>How to Organize a Successful Hackathon</h3>
                      <p className='blog-description'>Organizing a hackathon can be an exciting yet challenging endeavor. This blog post provides a comprehensive guide for first-time hosts on how to plan and execute a successful hackathon event.</p>
                      <KnowMore text="Read More" className="blogs-readmore"/>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Blogs