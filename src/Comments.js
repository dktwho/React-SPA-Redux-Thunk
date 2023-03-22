
import React from 'react'
import SingleComments from './SingleComment'
import { useState } from 'react'


const Comments = (props) => {
  const [textComment, setTextComment] = useState('')

  const handleInput = (e) => {
    setTextComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <div className='card-comments' >
      <form className='comment-item-create' action="" onSubmit={handleSubmit}>
        <input type="text" value={textComment} onChange={handleInput}/>
        <input type="submit" hidden />
      </form>
      <SingleComments/>
    </div>
  )
}

export default Comments
