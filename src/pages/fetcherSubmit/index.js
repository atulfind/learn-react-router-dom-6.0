import React from 'react'
import { useNavigation, useSubmit } from 'react-router-dom';

const FetcherSubmit = () => {
  const submit = useSubmit();
  const navigate =  useNavigation()
  console.log(navigate ,'k')
  
  const buttonSbm = () => {
    submit({email: "atul"}, {method: "post"});
  }

  return (
      <div>
        <input name='name'/>
        <input name='email'/>
        <button type='button' onClick={buttonSbm}>submit</button>
      </div>
  )
}

export default FetcherSubmit

export const loader = async ({request}) => {
  return null;
}

export const action = async ({request, params}) => {
  const formData = await request.formData();
  console.log(formData.get("email"), request.method)

  return null;
}