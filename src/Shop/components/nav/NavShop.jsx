import { Link } from 'react-router-dom'
import '../../styles/style.css'
import { IconsNavShop } from './IcosShop'
import { LogoNavShop } from './LogoShop'

export function NavHeaderShop () {
  return (
    <>
      <nav className='w-[100%] flex items-center justify-between px-14 py-5 text-[13px] '>
        <LogoNavShop />
        <ul className=' flex items-center justify-between p-1 gap-7  '>
          <li className='flex gap-10 '>
            <Link to='tacones' className='link_login' href=''>Tacones</Link>
            <Link to='blusas' className='link_login' href=''>Blusas</Link>
            <Link to='pantalones' className='link_login' href=''>Pantalones</Link>
            <Link to='faldas' className='link_login' href=''>Faldas</Link>
            <Link to='lenceria' className='link_login' href=''>Lenceria</Link>
          </li>
        </ul>
        <IconsNavShop />
      </nav>
    </>

  )
}
