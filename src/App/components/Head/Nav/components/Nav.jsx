import { Link } from 'react-router-dom'
import './../../styles/Nav.css'
import { LogoNav } from './Logo'
import { IconsNav } from './Icos'
import { linksNav } from '../const/contsNav'

export function NavHeader () {
  return (
    <>
      <nav className='flex items-center justify-between px-10'>
        <LogoNav />
        <ul className=' flex items-center justify-between p-1 gap-7  '>
          {linksNav.slice(1, 5).map((link, index) => (
            <Link className='hover:bg-[#00000046] py-1 px-2 rounded-md  ' key={index}>{link} </Link>
          ))}
        </ul>
        <IconsNav />
      </nav>
    </>

  )
}
