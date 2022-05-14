import React from 'react'
import Module from './Module'
import './styles/Courses/coursesstyle.css'
import { useState } from 'react'

const Courses = () => {
    const [onAdd, setOnAdd] = useState(false)
  return (
    <div className='b-courses'>
        <div className='top'>
            <h5 className='heading' >Courses</h5>
            <p className='add-class' onClick={()=>{setOnAdd(!onAdd)}}>{onAdd?'Hide' : 'Add a class +'}</p>
        </div>
        {onAdd && <div className='add-class-box' >
            <input type='search' placeholder='Enter class name'/>
            <h1 className='plus' >+</h1>
        </div>}
        <div className='modules'>
            <Module module='Analyse II - MIP' code='12348' link='/courses/module'/>
            <Module module='Algebre I - MIP' code='45651' link='/courses/module'/>
            <Module module='Algebre III - MI' code='12531' link='/courses/module'/>
            <Module module='Topologie - MI' code='45134' link='/courses/module'/>
        </div>
    </div>
  )
}

export default Courses