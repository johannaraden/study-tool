import React from 'react'
import styled from 'styled-components'
import { Frame } from '../common/frame.js'
import { HeaderButton } from '../common/gameHeader.js'


const SummaryPage = () => {
  return (
    <Frame>
      <HeaderButton link='/' title='Start'/>
      <HeaderButton link='/game' title='Game'/>
      <p>This is summarypage</p>
    </Frame>
  );
}

export default SummaryPage;
