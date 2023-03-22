
import React from 'react'
import { useState, useEffect } from 'react'

const SingleComments = ({data}) => {
  const [commentText, setCommentText] = useState('')
  const { text, id} = data

  useEffect(() => {
    if(text) {
      setCommentText(text)
    }
  }, [text])


  return (
    <form className='comments-item' action="">
      <div className="comment-item-delete">&times;</div>
      <input type="text" value={commentText} />
      <input type="submit" hidden />
    </form>
  )
}

export default SingleComments
