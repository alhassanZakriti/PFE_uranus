import React from 'react'
import profile_img from '../assets/profile_img.png'
import './styles/Settings/settingStyle.css'
import addPic from '../assets/addPic.svg'

const Settings = () => {
  return (
    <form className='maxx'>
        <h5 className='heading'>Settings</h5>
        <div className='info'>
          <div className='image'>
            <img src={profile_img} className='changePic' />
            <label for="inputTag">
              <img src={addPic} className='vectup'/>
              <input id="inputTag" type="file"/>
            </label>
          </div>
          <div className='both' >
            <input type='text' name='full name' placeholder='Full Name' className='infos'/>
            <input type='text' name='user name' placeholder='User Name' className='infos'/>
          </div>
          <div className='both'>
            <input type='email' name='email' placeholder='Email' className='infos'/>
            <input type='password' name='password' placeholder='Password' className='infos'/>
          </div>
          <div className='both' >
            <textarea placeholder='Biography' className='bio' />
          </div>
          <div className='both-btn' >
            <input type='reset' name='cancel' value='Cancel' className='btn-nostroke'/>
            <input type='button' name='save' value='Save Changes' className='btn'/>
          </div>
        </div>
    </form>
  )
}

export default Settings