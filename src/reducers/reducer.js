import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: {
    running: false,
  },
  timer: {
    amountOfTime: 0,
  },
  players: {
    items: [
      { name: 'Alena', profilePicture: 'https://api.multiavatar.com/johanna' },
      // { name: 'Bob', score: 0, itemIndex: 1, isTurn: false, profilePicture:null }
    ]
  }
}

export const Game = createSlice({
  name: 'Game',
  initialState,
  reducers: {
    setPlayer: (state, action) => {
      const name = action.payload;
      state.players.items.push(name)
      console.log(name)

    },
    addTimer: (state, action) => {
      // state.timer: (action.payload.timer)
      console.log('hej från reducer')
      console.log(action.payload.timer)
      state.timer.amountOfTime += action.payload.timer
    }
  }
})


//Thunk 

// export const addPlayer = ({name}) => {
//   console.log(name)
  // const SIGNUP_URL = 'https://api.multiavatar.com/'
  // return (dispatch) => {
  //   console.log('Trying to sign up ...')
  //   fetch(SIGNUP_URL, {
  //     method: 'GET',
  //     body: JSON.stringify(avatarId),
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //     .then(console.log('posted registration info to API...'))
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json()
  //       }
  //       throw 'Could not creat account. Try a different username.'
  //     })
  //     .then((json) => {
  //       console.log(json)
  //       dispatch(user.actions.setLoginResponse({ accessToken: json.accessToken, userId: json.userId }))
  //       dispatch(user.actions.setPlayerName({ userName: json.name }))
  //       dispatch(user.actions.setErrorMessage({ errorMessage: null }))
  //     })
  //     .catch((err) => {
  //       // dispatch(user.actions.setErrorMessage({ errorMessage: err }))
  //     })
  // }
// }


// export const addPlayer = name => async dispatch => {
//   try {
//     const player = await axios
//       .get(`https://api.multiavatar.com/${name}`)
//       .then(res => res.data)
//       // .then(json => console.log('this is:'+ json))
//       .then((json) => {
//         dispatch(Game.actions.setPlayer({ 
//           profilePicture: json,
//           name: name
//         }))
//         console.log(name, json)
//       })
//     console.log(name, player)
//   } catch (err) {
//     console.log('failed to update')
//   }
// }



export default Game;