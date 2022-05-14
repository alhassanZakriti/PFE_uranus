import React,{useEffect, useRef, useState} from 'react'
import './styles/Chat/chatstyle.css'
import profileimg from '../assets/Frame 3.svg'
import InMessage from './chatSubCopenents/InMessage'
import OutMessage from './chatSubCopenents/OutMessage'
import sendArow from '../assets/send.svg'
import { useSelector } from 'react-redux'
import axios from 'axios'
import io from "socket.io-client";
import ScrollToBottom from 'react-scroll-to-bottom';
import EmptyChat from './EmptyChat'
const SERVER = "http://localhost:3001";


const socket = io.connect("http://localhost:3001");


const Chat = () => {
  axios.defaults.withCredentials=true
  let [newMessage,setNewMessage]=useState({})
  let [myRMessages,setRMyMessages]=useState([])

  const messageInput = useRef(null)
  useEffect(()=>{
    
    socket.emit("join_room", userName);

    socket.on("receive_message", (data) => {
      setNewMessage({message:data.message,sender:false})
      
    });
  },[])

  useEffect(()=>{
    setRMyMessages([...myRMessages,newMessage])
  },[newMessage])
  let contactName = useSelector((data)=>data.mainChat.mainContact)
  let userName = useSelector((data)=>data.userInfo.userName)
  const getAllMessages = async() =>{
    await axios.post("http://localhost:3001/contact/getallmessages",{withUser:contactName}).
    then((res)=>{
      
      setRMyMessages(res.data.result)

    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    getAllMessages()
    
  },[contactName])

  useEffect(()=>{
    

  },[socket])

  const sendMessage= async()=>{
    let message = messageInput.current.value;
    if(message!=""){
      setRMyMessages([
        ...myRMessages,{message:message,sender:true}
      ])
      messageInput.current.value=""
      socket.emit("send_message", {
        room: contactName,
        author:userName ,
        message: message,
      })
      await axios.post("http://localhost:3001/contact/sendmessage",{to:contactName,message:message})
    }
  }
  

  
  if(!contactName){
    return(
      <div className='bb-empty'>
        <EmptyChat />
      </div>
    )
  }else{
    return (
      <div className='messagin'>
          <div>
            <div>
              <img src={profileimg}/>
              <p>{contactName}</p>
            </div>
            <div>
             <span></span>
             <span></span>
             <span></span>
            </div>
          </div>
            <ScrollToBottom >
              {
                myRMessages.map((message)=>{
                if(message.sender){
                  return <InMessage message={message.message} key={message.messageID}/>
                }else if(!message.sender){
                  return <OutMessage message={message.message} key={message.messageID}/>
                }
                })
              }
            </ScrollToBottom>
          <div>
            <div>
              <input type="text" ref={messageInput} placeholder='Type Something...' onKeyUp={(e)=>{
                if(e.key==="Enter"){
                  sendMessage()
                }
              }}/>
            </div>
            <div onClick={sendMessage} >
              <img src={sendArow} />
            </div>
          </div>
      </div>
    )
  }
  
}

export default Chat