import React, { memo } from 'react'
import './style.css'

export default memo(function BackTop({backtop}) {
  return (
    <>
      <div className='back-top' onClick={backtop}>
        <i className='fa fa-chevron-up'></i>
      </div>
    </>
  )
})
