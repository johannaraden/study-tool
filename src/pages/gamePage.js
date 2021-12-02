import React from 'react'
import styled from 'styled-components'
import { Frame } from '../common/frame.js'
import { HeaderButton } from '../common/gameHeader.js'

const GamePage = () => {
  return (
    <Frame>
      <HeaderButton link='/' title='Start'/>
      <HeaderButton link='/summary' title='Summary'/>
      <p>This is gamepagedsf</p>
    </Frame>
  );
}

export default GamePage;
