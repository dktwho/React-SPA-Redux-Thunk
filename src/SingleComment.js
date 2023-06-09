
import React from 'react'
import { useState, useEffect } from 'react'
import { commentUpdate, commentDelete } from './redux/actions'
import { useDispatch } from 'react-redux'
import { AiFillDelete } from 'react-icons/ai';



const SingleComments = ({data}) => {
  const [commentText, setCommentText] = useState('')
  const { text, id} = data
  const dispatch = useDispatch()

  useEffect(() => {
    if(text) {
      setCommentText(text)
    }
  }, [text])

  const handleInput = (e) => {
    setCommentText(e.target.value)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(commentUpdate(commentText, id))
  }
  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(commentDelete(id))
  }


  return (
    <form className='comments-item' action="" onSubmit={handleUpdate} >
      <div onClick={handleDelete} className="comment-item-delete"><AiFillDelete className='remove-symbol'/></div>
      <input type="text" value={commentText} onChange={handleInput}/> 
      <input type="submit" hidden />
    </form>
  )
}

export default SingleComments
