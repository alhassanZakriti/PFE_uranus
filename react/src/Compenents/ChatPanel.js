import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LastChat from './LastChat'
import "./styles/ChatPanel/chatPanelStyle.css"
const ChatPanel = () => {
  axios.defaults.withCredentials=true
  const [gotcontact,setGotContact] = useState(false)
  const [contacts,setContacts] = useState([])
  const getContacts = async()=>{
    await axios.get("http://localhost:3001/contact/allcontacts").then((res)=>{
      console.log(res);
      if(res.data.succes){
        setGotContact(true)
        let result = res.data.result;
        if(result[0]!=undefined){
          setContacts(result.map((contact)=>{
            return <LastChat name={contact.firstName+" "+contact.lastName} lastMessage={contact.userName} />
          }))
        }
      }else{
        console.log("not loading");
        setGotContact(true)
        setContacts(<p>No Contacts...</p>)
      }
    }).catch((err)=>{
        console.log(err);
    })
  }
  useEffect(()=>{
    getContacts()
  },[])

  return (
    <div >
      <h5>Chat</h5>
      <div className='Chats'>
        {gotcontact?(contacts):(<p>Go look for friends...!</p>)}
      </div>
    </div>
  )
}

export default ChatPanel