import { FormEvent, useState } from 'react'
import { AccountForm } from './AccountForm'
import { AddressForm } from './AddressForm'
import { UserForm } from './UserForm'
import { UserMultiForm } from './UserMultiForm'

function App() {

  type FormData = {
    first_name: string,
    last_name: string,
    age: string,
    email: string,
    password: string,
    street: string,
    city: string,
    state: string
  }
  const INITIAL_DATA : FormData = {
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    password: "",
    street: "",
    city: "",
    state: ""
  }
  
  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>){
    setData(prev => {
      return{...prev, ...fields}
    })
  }
  
  const {steps, currentStepIndex, currentStep, next, back, isFirstPage, isLastPage} = UserMultiForm([<UserForm {...data} updateFields={updateFields}/>, <AccountForm {...data} updateFields={updateFields}/>, <AddressForm {...data} updateFields={updateFields}/>])
  
  
  function onSubmit(e : FormEvent){
    e.preventDefault()
    if(isLastPage) alert("Signed up")
    next()
  }
  return ( 
    <div style={{
      position: "relative", 
      background :"white", 
      border: "1px solid black", 
      padding: "2em", 
      margin: "1rem", 
      borderRadius: ".5rem",
      fontFamily: "Arial",
      backgroundColor: "#e7e7e7"}}>
      <form onSubmit={onSubmit}> 
      <div style={{position: "absolute", top: ".5rem", right:"0.5rem"}}> {currentStepIndex + 1} / {steps.length}</div>
      <div>{currentStep}</div>
      <div style={{marginTop:"1rem", display: "flex", gap: "0.5rem", justifyContent: "flex-end"}}>
      {!isFirstPage && <button type="button" onClick={back}> Back </button>}
      <button type='submit'>{isLastPage ? "Finish" : "Next"}</button>
      </div>
      </form>
    </div>  
  )
}

export default App
