import React from 'react'
import { Frame } from '../common/frame.js'
import { HeaderButton } from '../common/gameHeader.js'
import { HeaderFrame } from '../common/headerFrame.js'

const StartPage = () => {
  return (
    <Frame>
      <HeaderFrame>
        <HeaderButton link='/game' title='Game'/>
        <HeaderButton link='/summary' title='Summary'/>
      </HeaderFrame>
      <p>Welcome to this simple conversation game!</p>
      <p>Listen to the instructions given by your coach and go to "game" when ready.</p>
    </Frame>
  );
}

export default StartPage;
