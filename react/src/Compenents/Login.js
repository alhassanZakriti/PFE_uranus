import React, { useRef, useState } from 'react'
import { insertUserInfo, setIsLogged } from '../state/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
const Login = () => {
  axios.defaults.withCredentials=true;
  const dispatch = useDispatch()
  const insertUserInf = bindActionCreators(insertUserInfo,dispatch)
  const userName = useRef(null)
  const password = useRef(null)
  const logIn = async()=>{
    let data={
      userName:userName.current.value,
      password:password.current.value
    }
    await axios.post('http://localhost:3001/api/login',data).then((res)=>{
      console.log(res.data.succes);
      if(res.data.succes){
        insertUserInf({userName:userName.current.value,password:password.current.value,isLogged:true})
      }else{
        console.log("u not logged")
      }
    }).catch((err)=>{
      console.log(err);
    })
  }

  
  return (
    <>
        <div>
            <h5>Welcome to Uranus {useSelector((t)=>t.userInfo.name)}</h5>
            <p>Sign up by entering information below</p>
        </div>
        <input type='UserName' placeholder='UserName' ref={userName} />
        <input type='Password' placeholder='Password' ref={password} onKeyUp={
          (e)=>{
            if(e.key=="Enter"){
              logIn()
            }
          }
        }/>
        
        <button onClick={logIn}>Log In</button>
        <p>Already have an account?<span>Log in</span></p>
    </>
  )
}

export default Login