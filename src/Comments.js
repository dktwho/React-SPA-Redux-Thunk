
import React from 'react'
import SingleComments from './SingleComment'
import { useState } from 'react'
import { commentCreate } from './redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid'


const Comments = (props) => {
  const [textComment, setTextComment] = useState('')
  const comments = useSelector(state => {
    const {commentsReducer} = state;
    return commentsReducer.comments
  })

  const dispatch = useDispatch()

  const handleInput = (e) => {
    setTextComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = uniqid();
    dispatch(commentCreate(textComment, id))
    setTextComment('')
    
  }

  return (
    <div className='card-comments' >
      <form className='comment-item-create' action="" onSubmit={handleSubmit}>
        <input type="text" value={textComment} onChange={handleInput}/>
        <input type="submit" hidden />
      </form>
      {!!comments.length && comments.map((res) => {
        return <SingleComments key={res.id} data={res} />
      })}
      
    </div>
  )
}

export default Comments
