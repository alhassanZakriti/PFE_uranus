import React from 'react'

const OutMessage = (props) => {
  return (
    <div className='outMessage'> 
      <div>
        {props.message}
      </div>       
    </div>
  )
}

export default OutMessage