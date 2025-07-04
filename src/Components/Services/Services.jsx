import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data' // or Projects_Data
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='projects' className='services'>
      <div className="services-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <a
              className="services-readmore"
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Read More</p>
              <img src={arrow_icon} alt="arrow icon" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
