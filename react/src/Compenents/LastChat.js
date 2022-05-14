import React, { useState } from 'react'
import arrow from "../assets/arrow.svg"
import profile from "../assets/Frame 3.svg"
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setMianChat } from '../state/actionCreators'
import { useNavigate} from 'react-router-dom'

const LastChat = (props) => {
  const navigate = useNavigate();
  let dispatch = useDispatch()
  const setMainChatfun= bindActionCreators(setMianChat,dispatch)
  const navigateToChat = ()=>{
    setMainChatfun({mainContact:props.lastMessage})
    setTimeout(() => {
      navigate('/chat')
    }, 0);
  }
  return (
    <div className='lastChat'>
      <div>
        <div>
              <img src={profile}/>
          </div>
          <div>
              <h5>{props.name}</h5>
              <p>{props.lastMessage}</p>
          </div>
      </div>
        <div onClick={navigateToChat}>
            <img src={arrow}/>
        </div>
    </div>
  )
}

export default LastChat