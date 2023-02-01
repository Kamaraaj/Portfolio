import React from 'react';
import {Element} from 'react-scroll'
import skillsside from '../../images/skillsside.jpg'
import LinearProgress from '@mui/material/LinearProgress';
import './SkillContainer.css';

const SkillContainer = () => {
  return (
    <Element className='skillcontainer' id='skills'>
        <div className='skillcontainer__image'>
            <img src={skillsside}  alt='Skill'/>
        </div>
        <div className='skillcontainer__text'>
            <h2>SKILLSETS</h2>
            <div className='skillcontainer__skillset'>
              <h5>HTML</h5>
              <div className='skillcontainer__slider skillcontainer__slider1'>
                <LinearProgress variant='determinate' value={80}/>
              </div>
            </div>

            <div className='skillcontainer__skillset'>
              <h5>CSS</h5>
              <div className='skillcontainer__slider skillcontainer__slider2'>
                <LinearProgress variant='determinate' value={75}/>
              </div>
            </div>

            <div className='skillcontainer__skillset'>
              <h5>Javascript</h5>
              <div className='skillcontainer__slider skillcontainer__slider3'>
                <LinearProgress variant='determinate' value={80}/>
              </div>
            </div>

            <div className='skillcontainer__skillset'>
              <h5>React</h5>
              <div className='skillcontainer__slider skillcontainer__slider4'>
                <LinearProgress variant='determinate' value={80}/>
              </div>
            </div>
        </div>
        
    </Element>
  )
}

export default SkillContainer;