import { Link } from 'react-router-dom'
import NavLinks from './Navlinks';
import {Squash as Hamburger} from 'hamburger-react'
import { useState } from 'react';
import Logo from '../assets/twitch.svg';


export default function Navbar() {
    const [isOpen, setOpen] = useState(false)
   
    return (
        <div className='header h-16 w-full flex justify-center fixed z-20'>
            <div className='flex h-full justify-between items-center w-11/12'>
                <Link to='/' className='z-30'>
                    <img src={Logo} className='w-12 h-auto' alt='Logo' />
                </Link>

                {/* Mobile Navigation */}
                <div className='md:hidden z-30'>
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        direction='right'
                        duration={0.4}
                        size={32}
                    />
                </div>

                <div className='fixed w-full md:hidden'>
                    {isOpen && <NavLinks setOpen={setOpen} />}
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:block h-full'>
                    <NavLinks setOpen={setOpen} />
                </div>

            </div>
        </div>
    )
}
