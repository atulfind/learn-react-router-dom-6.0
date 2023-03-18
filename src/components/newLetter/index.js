import React, { useEffect } from 'react'
import { useFetcher } from 'react-router-dom'

const NewsLetter = () => {
  const fetcher = useFetcher();
  // console.log(fetcher.data, 'Llllllldl')

  useEffect(() => {
    if (fetcher.state === "idle" && !fetcher.data) {
      fetcher.load("/news");
    }
  }, [fetcher]);

  console.log(fetcher.data, "data")

  const sumb = () => {
    fetcher.load("/news")
    fetcher.submit({email: "atulfind@gmal.com"}, {method: "post", action: "/news  "})
  }

  return (
    // <fetcher.Form method='post' action='/news'>
    <div>
      <input value={fetcher?.data?.email || ""} type="email" name='email' />
        <button onClick={sumb}>submit</button>
      </div>
    // </fetcher.Form>
  )
}

export default NewsLetter