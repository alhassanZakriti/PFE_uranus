import React from 'react'
import profileme from '../assets/profileme.jpg'
import Post from './Post'
import './styles/Profile/profilestyle.css'
import { useState } from 'react'

const Profile = (props) => {
  const [isMyProfile, setIsMyProfile] = useState(true)

  return (
    <div className='whole-profile'>
      <div className='infos-profile' >
        <div className='image-profile'>
          <img src={profileme} className='picprof' />
        </div>
        <div className='name-infos'>
          <h5 className='name'>{'Bryan Lincon'} <span className='job' >{'Student'}</span></h5>
          <p className='user' >{'@bryan.lincon'}</p>
          <p className='email' >{'bryan.lincon@gmail.com'}</p>
          <p className='bio' >I’m Bryan, from Manchester, I’m 23 years old, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        { (!isMyProfile) && <a className='btn-ac' >Add to contact</a>}
      </div>
      <h5 className='heading title' >{'Bryan Lincon'} Posts</h5>
      <div className='posts' >
      <Post name={"Bryan Lincon"} role={"Student"} image={profileme} isReplying={true}/>
      <Post name={"Bryan Lincon"} role={"Student"} image={profileme} isReplying={false}/>
      <Post name={"Bryan Lincon"} role={"Student"} image={profileme} isReplying={false}/>
      </div>
    </div>
  )
}

export default Profile