import React from 'react'
import Course from './Course'
import profprofile from '../assets/profprofile.png'
import './styles/learning/learningstyle.css'
import { useState } from 'react'
import JoinExpand from './JoinExpand'


const Learning = () => {
  const [onJoin, setOnJoin] = useState(false);
  return (
    <div className='whole-pg'>
      <div className='flexit'>
        <h5 className='heading'>Learning</h5>
        <p className='join' onClick={()=>{setOnJoin(!onJoin)}} >{onJoin? 'Hide' : 'Join a class +'}</p>
      </div>
      {onJoin  &&  <JoinExpand /> }
      <div className='postes'>
        <Course profile={profprofile} name='Edward Newgate' job='teacher' module='Algebra' title='Chapite III : Morphisme de groupe' text='here is the third chapter guys!'/>
        <Course profile={profprofile} name='Lionel scalonni' job='teacher' module='Analyse' title='Chapite I : Calcule des integrales' text=''/>
        <Course profile={profprofile} name='Mario Balotteli' job='teacher' module='Mecanique' title='Chapite IV : Dynamique du points' text='Hey there, here is your last chapter!'/>
      </div>
    </div>
  )
}

export default Learning