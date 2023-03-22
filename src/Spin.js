import { TailSpin } from 'react-loader-spinner'
import {  useSelector } from 'react-redux'

import React from 'react'

const Spin = (props) => {
  const spinner = useSelector(state =>  state.appReducer.loading)

  return (
    <div className='loader-styles'>
      <TailSpin
        type="TailSpin"
        color='#00BFFF'
        hidden={100}
        width={100}
        visible={spinner}
      />
    </div>
  )
}

export default Spin
