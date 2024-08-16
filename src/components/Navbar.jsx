import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-black text-white py-4 px-3'>
        <div className="logo">
            <span className='font-bold text-xl  mx-2'><Link to="/">TodoApp</Link></span>
        </div>
        <ul className="flex gap-8 mx-8 text-xl font-semibold">
            <li className='cursor-pointer hover:font-bold transition-all'><Link to="/">Home</Link></li>
            <li className='cursor-pointer hover:font-bold transition-all'><Link to="/about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
