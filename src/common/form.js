import React from 'react'
import styled from 'styled-components'

const AddForm = styled.form`
  margin: 2em auto;
  padding-left: 1em;
  display: flex;
  // background-color: #b2ddd1;
  // inline-size: max-content;
  // border-radius: 30px;
`

export const InputForm = ({type, placeholder, addingFunction, valueChange, inputValue }) => {

  return (
    // Passing a function
    <AddForm onSubmit={addingFunction}>
      <input 
        type={type} 
        placeholder={placeholder}
        value={inputValue}
        onChange={valueChange}
        className="nes-textarea"
        ></input>
      <button type='submit' className='submit-button'>Submit</button>
    </AddForm>
  )
}