
import { Link, useLocation } from "react-router-dom";
import { HiHome } from 'react-icons/hi'
import { FaGamepad } from 'react-icons/fa'
import { AiOutlineOrderedList } from 'react-icons/ai'
import 'animate.css'

export default function Navlinks({setOpen}) {
    
    const location = useLocation();

    const activeLink = (path) => {
        const baseStyle = 'flex items-center h-full w-full md:px-4 md:h-2/3 md:justify-center font-semibold text-xl'
        if (location.pathname === path) {
            return (`${baseStyle} link-active`)
        } else {
            return (`${baseStyle} text-white hover:text-white duration-200 `)
        }
    }

    return (
        <nav className='animate__animated animate__slideInLeft md:animate-none z-10 header w-full pt-16 min-h-full fixed top-0 left-0 flex justify-center md:pt-0 md:flex md:justify-center md:items-center md:z-auto md:relative md:h-full'>
            <ul className='w-full md:flex md:h-full md:items-center'>
                <li className='mb-2 h-14 md:flex md:mr-4 md:justify-center md:items-center md:h-full'>
                    <Link to='/' className={activeLink('/')} onClick={() => setOpen(false)}>
                        <HiHome className='w-8 h-auto mx-4 md:hidden' />
                        Home
                    </Link>
                </li>

                <li className='mb-2 h-14 md:flex md:mr-4 md:justify-center md:items-center md:h-full'>
                    <Link
                        to='/search'
                        className={activeLink('/search')}
                        onClick={() => setOpen(false)}
                    >
                        <FaGamepad className='w-8 h-auto mx-4 md:hidden' />
                        Search
                    </Link>
                </li>

                <li className='mb-2 h-14 md:flex md:mr-4 md:justify-center md:items-center md:h-full'>
                    <Link
                        to='/games'
                        className={activeLink('/games')}
                        onClick={() => setOpen(false)}
                    >
                        <AiOutlineOrderedList className='w-8 h-auto mx-4 md:hidden' />
                        TOP 20 Games
                    </Link>
                </li>
            </ul>
        </nav>
    )
}