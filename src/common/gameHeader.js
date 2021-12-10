import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
  padding: 1em 2.5em;
  border-radius: 30px;
  text-transform: uppercase;
  border: none;
  place-content: space-evenly;
  text-decoration: none;
  background-color: ${props => props.active ? 'darkred' : '#F5EEDC'}
  color: white;
`

const linkStyle = {
  textDecoration: 'none',
  color: '#97BFB4',
}


export const HeaderButton = ({link, title, color}) => {
  return (
    <Button className={color}>
      <Link style={linkStyle} to={link}>{title}</Link>
    </Button>
  );
}