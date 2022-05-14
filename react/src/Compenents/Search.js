import React from 'react'
import AddToContact from './AddToContact'
import Course from './Course'
import Post from './Post'
import './styles/Search/searchstyle.css'
import profprofile from '../assets/profprofile.png' 
import arrowDown from '../assets/arrowDown.svg' 
import arrowUp from '../assets/arrowUp.svg' 
import { useState } from 'react'


const Search = () => {

  const [onShowPeople, setOnShowPeople] = useState(true)
  const [onShowPosts, setOnShowPosts] = useState(false)
  const [onShowCourses, setOnShowCourses] = useState(false)

  return (
    <div className='b-search'>
        <h5 className='heading'>Search result of Edward</h5>
        <div className='results'>

          <div >
            <div className='headit' onClick={()=>{setOnShowPeople(!onShowPeople)}}>
              <h3 className='heading mince'>People</h3>
              {onShowPeople? <img src={arrowUp} className='plus' />:<img src={arrowDown} className='plus' />}
            </div>
            {onShowPeople && <div> 
              <AddToContact name='Edward Newgate' profile={profprofile} role='Teacher'/>
            </div>}
          </div>

          <div >
            <div className='headit' onClick={()=>{setOnShowPosts(!onShowPosts)}}>
              <h3 className='heading mince'>Posts</h3>
              {onShowPosts? <img src={arrowUp} className='plus' />:<img src={arrowDown} className='plus' />}
            </div>
            {onShowPosts && <div> 
              <Post image={profprofile} name='Edward Newgate' role='Teacher'/>
              <Post image={profprofile} name='Edward Newgate' role='Teacher'/>
              <Post image={profprofile} name='Edward Newgate' role='Teacher'/>
            </div>}
          </div>

          <div >
            <div className='headit' onClick={()=>{setOnShowCourses(!onShowCourses)}}>
              <h3 className='heading mince'>Courses</h3>
              {onShowCourses? <img src={arrowUp} className='plus' />:<img src={arrowDown} className='plus' />}
            </div>
            {onShowCourses && <div> 
              <Course profile={profprofile} name='Edward Newgate' job='teacher' module='Algebra' title='Chapite III : Morphisme de groupe' text='here is the third chapter guys!'/>
              <Course profile={profprofile} name='Edward Newgate' job='teacher' module='Algebra' title='Chapite III : Morphisme de groupe' text='here is the third chapter guys!'/>
            </div>}
          </div>
        </div>
    </div>
  )
}

export default Search