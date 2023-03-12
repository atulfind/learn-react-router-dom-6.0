import React from 'react'
import { useLoaderData } from 'react-router-dom'

const PostDetails = () => {
  const loaderData = useLoaderData();
  console.log(loaderData.k, 'o')
  return (
    <div>PostDetails</div>
  )
}

export default PostDetails

export const loader = ({ request, params}) => {
  
  console.log(request, request, "ll");

  return params;
}