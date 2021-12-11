import React from 'react'
import styled from 'styled-components'

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

export const StartButton = ({title}) => {
  return (
    <button class="nes-btn is-primary">
      {title}
    </button>
  );
}