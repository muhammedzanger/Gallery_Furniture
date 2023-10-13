/** @format */

import React from "react"
import { navigation } from "../data"
const NavMobile = () => {
  return (
    <nav className='w-full h-full bg-white shadow-2xl'>
      <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
        {navigation.map((nav, index) => {
          return (
            <li key={index}>
              <a className='text-1xl font-medium capitalize' href={nav.href}>
                {nav.name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavMobile
