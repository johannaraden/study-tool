import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  players: {
    name: '',
    id: null,
  },
  timer: { amountOfTime: 0}
}


const Game = createSlice({
  name: 'Game',
  initialState: initialState,
  reducers: {
    addPlayer(action, payload) {
      initialState.players.name.push(payload.name)
    }
  }
})

export default Game;