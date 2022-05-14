import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
const SignIn = () => {
  axios.defaults.withCredentials=true
  const firstName = useRef(null)
  const userName = useRef()
  const lastName = useRef()
  const password = useRef()
  const role = useRef()
  const verifyPassword = useRef()
  setTimeout(()=>{
  console.log(firstName.current);

  },0)
  const handleSignIn = async() =>{
    if(firstName.current.value!==""||lastName.current.value!==""||userName.current.value!==""||password.current.value!==""||verifyPassword.current.value!==""){
      if(password.current.value===verifyPassword.current.value){
        await axios.post('http://localhost:3001/api/signin',{firstName:firstName.current.value,
          lastName:lastName.current.value,
          userName:userName.current.value,
          role:(role.current.value=="student"),
          password:password.current.value
        }).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log(err);
        })
      }else{
        console.log("the passwords are not the same")
      }
    }else{
      console.log("some feilds are empty")
    
    }
  }
  return (
    <>
        <div>
            <h5>Welcome to Uranus</h5>
            <p>Sign up by entering information below</p>
        </div>
        <div>
            <input type='text' placeholder='First Name' ref={firstName}/>
            <input type='text' placeholder='Last Name' ref={lastName}/>
        </div>
        <select ref={role}>
            <option value="student">Student</option>
            <option value="techer">Teacher</option>
        </select>
        <input type='UserName' placeholder='Username' ref={userName}/>
        <input type='Password' placeholder='Password' ref={password}/>
        <input type='Password' placeholder='Verify Password' ref={verifyPassword} onKeyUp={
          (e)=>{if(e.key=="Enter")handleSignIn()}
        }/>
        <div>
          <input type='checkbox' /> 
          <label >Always remember me</label>
        </div>
        
        <button onClick={handleSignIn}>Sign Up</button>
        <p>Already have an account?<span>Log in</span></p>
    </>
  )
}

export default SignIn