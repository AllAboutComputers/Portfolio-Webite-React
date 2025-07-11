import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div className="img-wrapper" key={index}>
              <img src={work.w_img} alt="" />
            </div>
          );
        })}
      </div>
      <a 
        className="mywork-showmore" 
        href="https://github.com/AllAboutComputers" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow icon" />
      </a>
    </div>
  )
}

export default MyWork
