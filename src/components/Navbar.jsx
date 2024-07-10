import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  return (
    <nav className='${styles.paddindX} w-full flex itmes-center py-5 fixed top-0 z-20 bg-primary'>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className="flex itmes-center gap-2" onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}>
          <img src="/src/assets/logo.png" alt="logo" className='w-9 h-9 object-contain'/>
          <p className='text-green-600 text-[18px] font-bold cursor-pointer sm:block hidden'>Prabhat Sharma</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={Link.id} className={`${active === link.title ? "text-white": "text-secondary"}`}>
              <a href={'#${link.id}'}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  )
}

export default Navbar