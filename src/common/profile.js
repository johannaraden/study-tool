import React from 'react'
import styled from 'styled-components'
import { StartButton } from '../common/startButton'

const Section = styled.section`
  padding: 2em 3em;
  border-radius: 30px;
  margin: 2em;
  border: none;
  place-content: space-evenly;
  text-decoration: none;
  background-color: white;
  width: 20%;
  color: white;
  display: flex;
  flex-direction: column;
`

const Picture = styled.img`
  background-color: black;
  // background-image:url(profilePicture);

  width: 10em;
  margin-top: -4em;
  margin-left: 4em;
  height: 10em;
  border-radius: 200px; 
  align-self: flex-end;
`
const Name = styled.h3`
  color: #4F091D;
`


export const PlayerProfile = ({name, profilePicture}) => {
  return (
    <Section>
      <Picture alt='profile picture' src='https://www.fillmurray.com/200/200' style={{backgroundImage: profilePicture}}></Picture>
      {/* <img src='https://api.multiavatar.com/johanna' alt={name} width="72" height="72" /> */}
      <Name>{name}</Name>
      <StartButton title='start'/>
    </Section>
  );
}