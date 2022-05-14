import React from 'react'
import send from '../assets/send.svg'
const Replying = (props) => {
  return (
    <div className='replying'>
        <img className='propic' src={props.myProfile} />
        <div className='reply-input '><input type='text' placeholder='Reply here!' /></div>
        <div className='send-btn' onClick={props.onNotReplying} > <img  src={send}/> </div>
    </div>
  )
}

export default Replying