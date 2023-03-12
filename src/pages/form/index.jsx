import React from 'react'
import { Form, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom'

const sleep = () => {
  return new Promise((res, rej) => setTimeout(() => {
    res()
  }, 3000))
}

const UserForm = () => {
  const actionData = useActionData()
  const navigate = useNavigate();
  const navigation = useNavigation() // idle || submitting || "loading"

  return (
    <Form method='post' action='/posts/newPost'>
      <fieldset>
        <label>First Name</label>
        <input name="firstName" placeholder='first name' />
      </fieldset>
      <button type='button' onClick={() => navigate("/posts")}>Cancel</button>
      <button disabled={navigation==="submitting"} type='submit'>Submit</button>
      <p>{actionData?.message}</p>
    </Form>
  )
}

export default UserForm

export const action  = async ({request}) => {
  const data = await request.formData()
  const obj = {
    firstName: data.get("firstName")
  }

  try {
    await sleep()
    if(!obj.firstName) {
      throw {status: 401, message: "error"}
    }
  } catch (error) {
    console.log(error, "eerro")
    if(error.status === 401){
      // returning error mean don't show errorPage
      return error;
    }
    // throw error will show errorPage.
    throw error;
  }

  return redirect("/posts")
}