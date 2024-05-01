import { Link } from 'react-router-dom'
import '../../style/style.css'
import { IconsNavRegister } from './IcosRegister'
import { LogoNavRegister } from './LogoRegister'

export function NavHeader () {
  return (
    <>
      <nav className='w-[100%] flex items-center justify-between px-14 py-5 text-[13px] '>
        <LogoNavRegister />
        <ul className=' flex items-center justify-between p-1 gap-7  '>
          <li className='flex gap-10 '>
            <Link to='/' className='link_login' href=''>Inicio</Link>
            <Link to='/ec/shop/' className='link_login' href=''>Tienda </Link>
            <Link className='link_login' href=''>Accesorio</Link>
            <Link className='link_login' href=''>Ofertas </Link>
            <Link className='link_login' href=''>Contacto</Link>
          </li>
        </ul>
        <IconsNavRegister />
      </nav>
    </>

  )
}
