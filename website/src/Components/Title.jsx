import React from 'react'
import '../Compnents_Styles/titleStyle.css'

const Title = ({heading}) => {
  return (
    <div className='title-container'>
      <h1>{heading}</h1>
    </div>
  )
}

export default Title;