import React from 'react'
import Button from './Button,'
import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
const Header = ({title,onAdd,showAddTask}) => {


 const location = useLocation()
  return (
   <header className='header'>
    <h2>Hello {title}</h2>
   {location.pathname === '/' && <Button color={showAddTask ? "red" : "green"} text={showAddTask ? "Close" : "Add"} onClick={onAdd}></Button>}
   </header>
  )
}
Header.propTypes = {
    title : PropTypes.string.isRequired
}
Header.defaultProps = {
    title : "Halim"
}


export default Header