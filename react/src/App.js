import React, { useEffect, useRef } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Menu from './Compenents/Menu';
import Header from './Compenents/Header';
import Home from './Compenents/Home';
import ChatPanel from './Compenents/ChatPanel';
import AddPost from './Compenents/AddPost';
import profile from './assets/Frame 3.svg'
import Chat from './Compenents/Chat';
import NoPAge from './Compenents/NoPAge';
import HomeNotLogged from './Compenents/HomeNotLogged';
import {useSelector,useDispatch} from 'react-redux' 
import axios from 'axios';
import { bindActionCreators } from 'redux'
import { insertUserInfo } from './state/actionCreators'
import Learning from './Compenents/Learning'
import Settings from './Compenents/Settings'
import Profile from './Compenents/Profile'

import Courses from './Compenents/Courses';
import LearningTeacher from './Compenents/LearningTeacher';
import Search from './Compenents/Search';



function App() {
  axios.defaults.withCredentials=true;
  const dispatch = useDispatch()
  const insertUserInf = bindActionCreators(insertUserInfo,dispatch)
  const checklogin = async()=>{
    await axios.post("http://localhost:3001/api/checklogin").
    then((res)=>{
      console.log(res.data);
      if(res.data.succes){
        console.log("u r logged in");
        insertUserInf({
          isLogged:true,
          userName:res.data.userName
        })
      }
    })
  }
  const b_home = useRef()

  useEffect( ()=>{
    checklogin()
    setTimeout(()=>{
      console.log(b_home.current)
    },1000)
  },[])
  console.log(useSelector((data)=>data))
  //useSelector((data)=>data.userInfo.isLogged)
  if(true){
    return (
        <div className="App">
          <Router>
          <div className='header'>
            <Header/>
          </div>
          <div className='content'>
            <div className='b-menu'>
              <Menu linkit='/learning' Learning='Learning'/>
            </div>
            <div className='b-home' ref={b_home}>
              
                <Routes>
                  <Route path='/' element={<Home/>} ></Route>
                  <Route path='/learning' element={<Learning/>}></Route>
                  <Route path='/chat' element={<Chat/>}></Route>
                  <Route path='/profile' element={<Profile/>}></Route>
                  <Route path='/settings' element={<Settings/>}></Route>
                  <Route path='*' element={<NoPAge/>}></Route>
                  <Route path='/search' element={<Search/>}></Route>
                </Routes>
              
            </div>
            <div className='chatPanel'>
              <ChatPanel/>
            </div>
            <AddPost name={"Brayan"} role={"Student"} image={profile}/>
          </div>
          </Router>
        </div>
    );
  }else if(true){
    return (
      <div className="App">
        <Router>
        <div className='header'>
          <Header/>
        </div>
        <div className='content'>
          <div className='b-menu'>
            <Menu linkit='/courses' Learning='Courses'/>
          </div>
          <div className='b-home' ref={b_home}>
            
              <Routes>
                <Route path='/' element={<Home/>} ></Route>
                <Route path='/courses' element={<Courses/>}></Route>
                <Route path='/courses/module' element={<LearningTeacher myName='Edward Newgate' module='Analyse II' />}></Route>
                <Route path='/chat' element={<Chat/>}></Route>
                <Route path='/profile' element={<Profile/>}></Route>
                <Route path='/settings' element={<Settings/>}></Route>
                <Route path='*' element={<NoPAge/>}></Route>
                <Route path='/search' element={<Search/>}></Route>
              </Routes>
            
          </div>
          <div className='chatPanel'>
            <ChatPanel/>
          </div>
          <AddPost name={"Edward"} role={"Teacher"} image={profile}/>
        </div>
        </Router>
      </div>
  );
  }
  
  else{
    return(
        <HomeNotLogged/>
    )
  }

  
}

export default App;
