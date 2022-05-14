import React from 'react'
import './styles/Course/coursestyle.css'
import pdf from '../assets/pdf.svg'
import download from '../assets/download.svg'

const Course = (props) => {
  return (
    <div className='contain'>
        <div className='informations'>
            <div className='top-left'>
                <img src={props.profile} className='profile'/>
                <div className='name-desc'>
                    <h2 className='name'>{props.name}</h2>
                    <p className='job'>{props.job}</p>
                </div>
            </div>
            <h3 className='module'>{props.module}</h3>
        </div>
        
        <div className='post-desc'>
            <div className='text'>{props.text}</div> 
            <div >
                <div className='contain pdf'>
                    <div className='left-side'>
                        <img src={pdf} className='icon'/>
                        <h4 className='title'>{props.title}</h4>
                    </div>
                    <img src={download} className='down' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Course