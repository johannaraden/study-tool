import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
}

export const HeaderButton = ({link, title}) => {
  return (
    <button className='nes-btn is-primary header-button'>
      <Link style={linkStyle} to={link}>{title}</Link>
    </button>
  );
}