import React from 'react'
import { useLoaderData } from 'react-router-dom'

const PostDetails = () => {
  const loaderData = useLoaderData();
  console.log(loaderData, 'o')
  return (
    <div>PostDetails</div>
  )
}

export default PostDetails

export const loader = ({ request, params}) => {
  
  console.log(request, params, "ll");

  return params;
}