import React, { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { Game } from '../reducers/reducer'
import { InputForm } from '../common/form'


export const SetTimer = () => {
 
  const [time, setTime] = useState('')
  const dispatch = useDispatch()

  const submitTimer = (event) => {
    event.preventDefault();
    console.log(time)
    dispatch(Game.actions.addTimer({
      timer: time
    })
    )
    setTime('')
  }

  return (
    <InputForm 
      type='number'
      placeholder='time to speak'
      addingFunction={submitTimer}
      valueChange={event => setTime(event.target.value)}
      inputValue={time}
      />
  )
}