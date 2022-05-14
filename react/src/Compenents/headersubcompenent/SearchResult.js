import axios from 'axios'
import React,{useRef}from 'react'

const SearchContact = (props) => {
    axios.defaults.withCredentials=true;
    const userName= useRef()
    const addContact = async()=>{
        await axios.post("http://localhost:3001/contact/addcontact",{contact2UserName:userName.current.textContent})
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <div>
            <div>
                <img src="" />
            </div>
            <div>
                <p ref={userName}>{props.name}</p>
            </div>
        </div>
        <div onClick={addContact}>
            <button>Add Contact</button>
        </div>
    </div>
  )
}

export default SearchContact