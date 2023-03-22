import React from 'react'
import { connect } from 'react-redux'

const Likes = (props) => {
  
  return (
    <div className='button-controls'>
      <button onClick={props.onIncrementLikes}>❤{props.likes} Likes</button>
      <button onClick={props.onDecrementLikes}>💣 Dislike</button>
    </div>
  )
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state)
  return {
    likes: state.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => {
      console.log('increment')
      const action = {type: 'INCREMENT'}
      dispatch(action)
    },
    onDecrementLikes: () => {
      console.log('decrement')
      const action = {type: 'DECREMENT'}
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
