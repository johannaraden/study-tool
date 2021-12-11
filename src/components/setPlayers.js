import React, { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { Game } from '../reducers/reducer'
import { InputForm } from '../common/form'
import axios from 'axios'

export const SetPlayers = () => {
  const dispatch = useDispatch()
  const [ name, setName ] = useState('')
  const [ picture, setPicture ] = useState()


  const submitPlayer = (event) => {
    event.preventDefault();
    axios.get(`https://api.multiavatar.com/${name}`)
      .then(res => console.log(res.data))
      .then((json) => this.state.picture(json))
      // console.log(name, json)
    console.log(name)
    dispatch(Game.actions.setPlayer({
      name: name,
      profilePicture: picture,
    }))
    setName('')
    setPicture('')
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
