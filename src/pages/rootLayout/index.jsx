import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <ul>
      <li>helo</li>
      <li>2</li>
    </ul>
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default RootLayout