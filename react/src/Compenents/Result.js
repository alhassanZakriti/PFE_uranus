import React from 'react'

const Result = (props) => {
  return (
        <div className='result' >
            <div className='profile-name' >
                <img src={props.profile} className='profile' />
                <div className='lefted' >
                    <h3 className='name'>{props.name}</h3>
                    <p className='module'>{props.module}</p>
                </div>
            </div>
            <a className='btn-1'>Add</a>
        </div>
  )
}

export default Result