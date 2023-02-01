import React from 'react'
import './TopContent.css'
const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
            <h1>B.Kamaraaj</h1>
            <p>A professional web and app developer</p>
            <a href='https://drive.google.com/file/d/1Zz-c6PsujL0WQMaadlVY1rwIJsqXOJ8E/view?usp=share_link'
            target='_blank' rel='noreferrer'>
                <button className='topcontent__downloadbutton'> Download CV</button>
            </a>
            
        </div>
    </div>
  )
}

export default TopContent