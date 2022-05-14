import React from 'react'
import Course from './Course'
import profprofile from '../assets/profprofile.png'
import './styles/learning/learningstyle.css'



const LearningTeacher = (props) => {
    return (
      <div className='whole-pg'>
        <div className='flexit'>
          <h5 className='heading'>{props.module}</h5>
        </div>
        <div className='postes'>
          <Course profile={profprofile} name={props.myName} job='teacher' module={props.module} title='Chapite III : Morphisme de groupe' text='here is the third chapter guys!'/>
          <Course profile={profprofile} name={props.myName} job='teacher' module={props.module} title='Chapite I : Calcule des integrales' text=''/>
          <Course profile={profprofile} name={props.myName} job='teacher' module={props.module} title='Chapite IV : Dynamique du points' text='Hey there, here is your last chapter!'/>
        </div>
      </div>
    )
}

export default LearningTeacher