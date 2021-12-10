import React from 'react'
import { Frame } from '../common/frame.js'
import { HeaderButton } from '../common/gameHeader.js'
import { HeaderFrame } from '../common/headerFrame.js'


const SummaryPage = () => {
  return (
    <Frame>
      <HeaderFrame>
        <HeaderButton link='/' title='Start'/>
        <HeaderButton link='/game' title='Game'/>
      </HeaderFrame>
      <p>This is summary page</p>
      <img src="https://www.api.multiavatar.com/johanna.svg" />
    </Frame>
  );
}

export default SummaryPage;
