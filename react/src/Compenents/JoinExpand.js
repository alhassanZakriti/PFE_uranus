import React from 'react'
import search from '../assets/search.svg'
import { useState } from 'react'
import Result from './Result'
import profprofile from '../assets/profprofile.png'

const JoinExpand = () => {
    const [onSearch, setOnSearch] = useState(false)
  return (
    <div className='join-expand'>
        <form className='search-box'>
            <input type='search' placeholder='Enter code' className='input'/>
            <img src={search} onClick={()=> {setOnSearch(true)}} className='search-icon' />
        </form>

        {onSearch && <Result profile={profprofile} name='Edward Newgate' module='Algebre' />}
    </div>
  )
}

export default JoinExpand