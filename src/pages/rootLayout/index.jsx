import React from 'react'
import { Outlet } from 'react-router-dom'
import NewsLetter from '../../components/newLetter'

const RootLayout = () => {
  return (
    <>
    <ul>
      <li>helo</li>
      <li>2</li>
      <li><NewsLetter /></li>
    </ul>
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default RootLayout