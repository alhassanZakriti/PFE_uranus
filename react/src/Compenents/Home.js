import React from 'react'
import Post from './Post'
import './styles/Home/homestyle.css'
import profile from '../assets/Frame 3.svg'
import { useSelector } from 'react-redux'
import profile_img from '../assets/profile_img.png'
import profileme from '../assets/profileme.jpg'

const Home = () => {
  let d= useSelector((v)=>v)
  console.log(d);
  return (
    <div className='home'>
        <h5>Home</h5>
        <div className='home-posts'>
          <Post name={"Alex James"} role={"Student"} image={profileme}  />
          <Post name={"Sarah Jay"} role={"Student"} image={profileme}/>
          <Post name={"Edward Newgate"} role={"Teacher"} image={profileme}/>
          <Post name={"Edward Newgate"} role={"Teacher"} image={profileme}/>
          <Post name={"Edward Newgate"} role={"Teacher"} image={profileme}/>
        </div>
    </div>
  )
}

export default Home