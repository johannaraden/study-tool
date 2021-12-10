import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Frame } from '../common/frame.js'
import { HeaderButton } from '../common/gameHeader.js'
import { HeaderFrame } from '../common/headerFrame.js'
import { SetTimer } from '../components/setTimer.js'
import { SetPlayers } from '../components/setPlayers.js'
import { PlayerProfile } from '../common/profile.js'

const GameHeadline = styled.h1`
  color: white;
  text-align: center;
  margin: 1em;
`
const GameInstructions = styled(GameHeadline)`
  font-size: 1em;
`
const PlayerContainer = styled.div`
  display: flex;
`
const TimerContainer = styled.div`
  color: #617a74;
  width: 5em;
  height: 5em;
  border-radius: 200px; 
  background-color: #F5EEDC;
  display: flex;
  justify-content: center;
  color: #617a74;
  align-content: center;
  flex-wrap: wrap;
  margin: 3em auto;
`
const GamePage = () => {
  const playerList = useSelector((store) => store.Game.players)
  const Timer = useSelector((store) => store.Game.timer)


  return (
    <Frame>
      <HeaderFrame>
        <HeaderButton color='green' link='/' title='Start'/>
        <HeaderButton link='/summary' title='Summary'/>
      </HeaderFrame>
      <GameHeadline>this is game page</GameHeadline>
      <GameInstructions>put in amount of time and names of the players in order to start the game</GameInstructions>
      <SetPlayers />
      <SetTimer />
      <TimerContainer>{Timer.amountOfTime}</TimerContainer>
      <PlayerContainer>
        {playerList.items.map((item, index, profilePicture) => (
          <PlayerProfile key={index} name={item.name} profilePicture={profilePicture}/>
        ))}
      </PlayerContainer>
    </Frame>
  );
}

export default GamePage;
