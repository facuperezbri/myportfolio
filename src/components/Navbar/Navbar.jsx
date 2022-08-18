import React, { useState } from 'react'

import { navbar } from '../../constants'
import Button from '../ComponentsUI/Button'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import Logo from '../../assets/FACU.png'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='sticky top-0 bg-white flex justify-between sm:justify-around px-3 mt-2 sm:px-0 items-center mb-5 md:mb-0 h-[8vh] md:h-[5vh]'>
      <Link to='/'>
        <img src={Logo} alt='logo' className='h-[50px]' />
      </Link>


      {/* Desktop */}
      <ul className='hidden sm:flex gap-5 items-center'>
        {navbar.map((n, i) => (
          <li className='hover:-translate-y-1 duration-300 font-thin'>
            <a className='' href={n.id}>{n.title}</a>
          </li>
        ))}
        <Button className={'bg-black text-white'}><a href='mailto:facundo.perez.brizuela@gmail.com'>Contact Me</a></Button>
      </ul>


      {/* Mobile */}
      <div className='sm:hidden'>
        {toggle ? <AiOutlineClose size={25} onClick={() => setToggle((prev) => !prev)} /> : <AiOutlineMenu size={25} onClick={() => setToggle((prev) => !prev)} />}
        <ul className={`${toggle ? 'flex' : 'hidden'} flex-col absolute right-0 pr-3`}>
          {navbar.map((n, i) => (
            <li key={i}>
              <Link key={i} to={n.id}>{n.title}</Link>
            </li>
          ))}
        </ul>

      </div>

    </nav>
  )
}

export default Navbar