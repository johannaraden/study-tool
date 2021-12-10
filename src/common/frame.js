import styled from 'styled-components'

export const Frame = styled.section`
  margin: 4em auto;
  padding-bottom: 2em;
  width: 80%;
  border-radius: 10px;
  background-color: ${props => props.active ? 'darkred' : '#97BFB4'}
`

