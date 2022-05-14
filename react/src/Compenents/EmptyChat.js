import React, { useState } from 'react'
import vector from '../assets/vector.png'
import AddToContact from './AddToContact'
import profprofile from '../assets/profprofile.png'

const EmptyChat = () => {

    const [onStart, setOnStart ] = useState(false);

  return (
    <div className='bb-empty'>
        {onStart? <div className='popup' >
                <div className='headtext'>
                    <h5 className='heading center' >Look for a collegue or teacher!</h5>
                    <p className='close' onClick={() => {setOnStart(false)}}>Hide -</p>
                </div>
                <form >
                    <input type='search' className='searching' placeholder='Enter user name'/>
                    <input type='submit' value='Search' className='search-text' />
                </form>
                <AddToContact name='Edward Newgate' profile={profprofile} role='Teacher'/>
            </div> : <div className='b-empty'>
            <img src={vector} className='vect' alt='vector' />
            <h5 className='heading center' >Start a new conversation now!</h5>
            <a className='btn-align-center' onClick={() => {setOnStart(true)}}>Get started</a>
        </div>}
            
    </div>
  )
}

export default EmptyChat