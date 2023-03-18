import React from 'react'
import NewsLetter from '../../components/newLetter'

const News = () => {
  return (
    <div>
      <NewsLetter />
    </div>
  )
}

export default News

export const loader = async () => {
  return { message: "success", email: "atulfind@gmail.com" };
}

export const action = async ({request}) => {
  const formData = await request.formData();
  const email = formData.get("email");
  console.log(email, 'll')

  return { message: "success", email };
}