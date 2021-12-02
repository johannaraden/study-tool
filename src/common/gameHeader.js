import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
  // margin: 4em auto;
  // padding: 2em;
  background-color: violet;
  border: 1px solid black;
  border-radius: 6px;
  display: flex;
`


export const HeaderButton = ({link, title}) => {
  return (
    <Button >
      <Link to={link}>{title}</Link>
    </Button>
  );
}