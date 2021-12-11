import React from 'react'
import { HeaderButton } from '../common/gameHeader.js'

const StartPage = () => {
  return (
    <section className='nes-container with-title is-center frame'>
      <p className="title">Conversation game</p>
      <div className='nes-container header-frame'>
        <HeaderButton link='/game' title='Game'/>
        <HeaderButton link='/summary' title='Summary'/>
      </div>
      <span class="nes-text is-warning intro-text">Welcome to this simple conversation game!</span>
      <div className="nes-container is-rounded is-dark instructions-container">
        <p>Listen to the instructions given by your coach and go to "game" when ready.</p>
      </div>
    </section>
  );
}

export default StartPage;
