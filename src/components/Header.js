/** @format */

import React, { useEffect, useState } from "react"
import Logo from "../assets/img/logo.svg"
import { CgMenuRight, CgClose } from "react-icons/cg"
import { navigation } from "../data"
import NavMobile from "../components/NavMobile"
const Header = () => {
  const [bg, setBg] = useState(false)
  const [navMobile, setNavMobile] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setBg(true) : setBg(false)
    })
  })
  return (
    <header
      className={`${
        bg ? "bg-primary py-4 lg:py-6" : "bg-none"
      } fixed left-0 w-full py-8 z-10 transition-all duration-300 `}>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img className='h-6 lg:h-8' src={Logo} alt='' />
          </a>
          <div
            onClick={() => setNavMobile(!navMobile)}
            className='text-2xl text-white md:hidden lg:text-3xl cursor-pointer'>
            {navMobile ? <CgClose /> : <CgMenuRight />}
          </div>
          <nav className='hidden md:flex'>
            <ul className='md:flex md:gap-x-12'>
              {navigation.map((nav, index) => {
                return (
                  <li key={index}>
                    <a
                      className='capitalize text-white hover:border-b transition-all'
                      href={nav.href}>
                      {nav.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div
            className={`${
              navMobile ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}>
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
