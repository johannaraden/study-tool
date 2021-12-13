import React, { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { Game } from '../reducers/reducer'
import { InputForm } from '../common/form'

export const SetPlayers = () => {
  const dispatch = useDispatch()
  const [ name, setName ] = useState('')

  const submitPlayer = (event) => {
    event.preventDefault();
    dispatch(Game.actions.setPlayer({
      name: name,
      profilePicture: `https://api.multiavatar.com/${name}.png`
    }))
    setName('')
  }

  return (
    <InputForm 
      type='text'
      placeholder='type player name'
      addingFunction={submitPlayer}
      valueChange={event => setName(event.target.value)}
      inputValue={name}
      />
  )
}
