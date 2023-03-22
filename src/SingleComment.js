
import React from 'react'

const SingleComments = (props) => {
  
  return (
    <form className='comments-item' action="">
      <div className="commnet-item-delete">&times;</div>
      <input type="text" />
      <input type="submit" hidden />
    </form>
  )
}

export default SingleComments
