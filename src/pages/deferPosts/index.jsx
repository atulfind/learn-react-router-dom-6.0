import React, { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom';

const sleep = () => {
  return new Promise((res, rej) => setTimeout(() => {
    res(["kk", 'kkk'])
  }, 3000))
}


const DeferPosts = () => {
  const loaderData = useLoaderData();

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={loaderData.posts} errorElement={<p>error object</p>}>
          {
            (loadedData) => <p>{loadedData.join(", ")}</p>
          }
        </Await>
      </Suspense>
    </div>
  )
}

export default DeferPosts;

export const loader = async () => {

  return defer({
    posts: getData()
  })
}


const getData = async () => {
  await sleep();

  return ["kkkk", 'kkk']
}