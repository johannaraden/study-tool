import React from 'react'
import styled from 'styled-components'


const SubmitButton = styled.button`
  background-color: #617a74;
  cursor: pointer;
  border-radius: 30px;
  border: none;
  padding: 20px;
  font-size: 1em;
`

const AddForm = styled.form`
  margin: 2em auto;
  padding-left: 1em;
  background-color: #b2ddd1;
  inline-size: max-content;
  border-radius: 30px;
`

const InputField = styled.input`
  border-radius: 10px;
  border: none;
  background-color: #b2ddd1;
  font-size: 1em;
`

export const InputForm = ({type, placeholder, addingFunction, valueChange, inputValue }) => {

  return (
    // Passing a function
    <AddForm onSubmit={addingFunction}>
      <InputField 
        type={type} 
        placeholder={placeholder}
        value={inputValue}
        onChange={valueChange}
        ></InputField>
      <SubmitButton type='submit'>Submit</SubmitButton>
    </AddForm>
  )
}