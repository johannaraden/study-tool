import React from 'react'
import { HeaderButton } from '../common/gameHeader.js'


const SummaryPage = () => {
  return (
    <section className='nes-container with-title is-center frame'>
      <p class="title">Conversation game</p>
      <div className='nes-container header-frame'>
        <HeaderButton link='/' title='Start'/>
        <HeaderButton link='/game' title='Game'/>
      </div>
      <p>This is summary page</p>
    </section>
  );
}

export default SummaryPage;
