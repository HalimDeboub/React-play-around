import React from 'react'
import PropTypes from 'prop-types'





const Button= ({color, text, onClick}) => {
  return (
    <button onClick={onClick} style={{backgroundColor:color}} className='btn'>{text}</button>
  )
}

Button.defaultProps = {
    color:"steelBlue"
}
Button.propTypes={
    color:PropTypes.string.isRequired,
    onClick:PropTypes.func,
    text:PropTypes.string.isRequired
}

export default Button