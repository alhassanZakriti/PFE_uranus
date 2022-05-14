import React from 'react'
import moduleIcon from '../assets/moduleIcon.svg'
const Module = (props) => {
  return (
    <a href={props.link} className='b-module'>
        <img src={moduleIcon} />
        <div className='texts'>
            <h3 className='module-nama' >{props.module}</h3>
            <p className='class-code'>Class code: <span className='code'>{props.code}</span> </p>
        </div>
    </a>
  )
}

export default Module