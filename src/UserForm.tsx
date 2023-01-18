import { FormWrapper } from "./FormWrapper";

type UserData ={
    first_name: string,
    last_name: string,
    age: string,
}
type UserFormProps = UserData & {
    
    updateFields : (fields: Partial<UserData>) => void

}
export function UserForm({first_name, last_name, age, updateFields}: UserFormProps){
    return(
        <FormWrapper title="User Details">
        <label>First Name</label>
        <input autoFocus required type = "text" value={first_name} onChange={e => updateFields({first_name : e.target.value})}/>
        <label>Last Name</label>
        <input required type = "text" value={last_name} onChange={e => updateFields({last_name : e.target.value})}/>
        <label>Age</label>
        <input required min={1} type = "number" value={age} onChange={e => updateFields({age : e.target.value})}/>

        </FormWrapper>
    )
}