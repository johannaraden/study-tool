import React from 'react'
import styled from 'styled-components'
import { Frame } from '../common/frame.js'
import { HeaderButton } from '../common/gameHeader.js'

const StartPage = () => {
  return (
    <Frame>
      <HeaderButton link='/game' title='Game'/>
      <HeaderButton link='/summary' title='Summary'/>
      <p>Welcome to this simple conversation game!</p>
      <p>Listen to the instructions given by your coach and push start when ready.</p>
    </Frame>
  );
}

export default StartPage;
