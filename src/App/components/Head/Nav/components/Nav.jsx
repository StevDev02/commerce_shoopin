import { Link } from 'react-router-dom'
import './../../styles/Nav.css'
import { LogoNav } from './Logo'
import { IconsNav } from './Icos'

export function NavHeader () {
  return (
    <>
      <nav className='flex items-center justify-between px-10'>
        <LogoNav />
        <ul className=' flex items-center justify-between p-1 gap-7  '>
          <li className='flex gap-10 '>
            <Link to='/ec/shop/' className='link_login' href=''>Tienda</Link>
            <Link to='/' className='link_login' href=''>Accesorios</Link>
            <Link className='link_login' href=''>Ofertas</Link>
            <Link className='link_login' href=''>Contacto</Link>
          </li>
        </ul>
        <IconsNav />
      </nav>
    </>

  )
}
