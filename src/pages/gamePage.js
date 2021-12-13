import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { HeaderButton } from '../common/gameHeader.js'
import { SetTimer } from '../components/setTimer.js'
import { SetPlayers } from '../components/setPlayers.js'
import { PlayerProfile } from '../common/profile.js'

const GameHeadline = styled.h1`
  // color: white;
  text-align: center;
  margin: 1em;
`
const GameInstructions = styled(GameHeadline)`
  font-size: 1em;
`
const PlayerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
// const TimerContainer = styled.div`
//   color: #617a74;
//   width: 5em;
//   height: 5em;
//   border-radius: 200px; 
//   background-color: #F5EEDC;
//   display: flex;
//   justify-content: center;
//   color: #617a74;
//   align-content: center;
//   flex-wrap: wrap;
//   margin: 3em auto;
// `
const GamePage = () => {
  const playerList = useSelector((store) => store.Game.players)
  const Timer = useSelector((store) => store.Game.timer)


  return (
    <section className='nes-container with-title is-center frame'>
      <p class="title">Conversation game</p>
      <div className='nes-container header-frame'>
        <HeaderButton color='green' link='/' title='Start'/>
        <HeaderButton link='/summary' title='Summary'/>
      </div>
      <GameHeadline>this is game page</GameHeadline>
      <GameInstructions>put in amount of time and names of the players in order to start the game</GameInstructions>
      <SetPlayers />
      <SetTimer />
        <section className="message-list">
        <section className="message -left">
          <i class="nes-bcrikko"></i>
          {/* <!-- Balloon --> */}
        <div className="nes-balloon from-left">
        <p>Get ready!</p>
        </div>
      </section>
      {Timer.amountOfTime && 
      <section className="message -right">
      {/* <!-- Balloon --> */}
      <div className="nes-balloon from-right is-dark">
        <p>Timer set to: {Timer.amountOfTime} minutes</p>
      </div>
      <i class="nes-bcrikko"></i>
    </section>
      }
      </section>
      <PlayerContainer>
        {playerList.items.map((item, index) => (
          <PlayerProfile key={index} name={item.name} profilePicture={item.profilePicture}/>
        ))}
      </PlayerContainer>
    </section>
  );
}

export default GamePage;
