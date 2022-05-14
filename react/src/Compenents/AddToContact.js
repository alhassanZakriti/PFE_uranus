import React from 'react'
import './styles/AddToContact/addtocontactstyle.css'
import message from '../assets/message.svg'

const AddToContact = (props) => {
  return (
    <div className='contain flexing'>
        <div className='lefted'> 
            <img src={props.profile} />
            <div className='name-role' >
                <h3 className='name'>{props.name}</h3>
                <p className='job'>{props.role}</p>
            </div>
        </div>    
        <a className='btn-add-to'>Add to contact </a>    
    </div>
  )
}

export default AddToContact