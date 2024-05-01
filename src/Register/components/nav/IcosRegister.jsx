import { Link } from 'react-router-dom'
import '../../style/style.css'

export function IconsNavRegister () {
  return (
    <>
      <ol>
        <li className='flex gap-5 items-center '>
          <a className='link_login ' href=''>Español</a>
          <Link to='/ec/login' className='link_login_res text-[13px] hover:text-[#fafafa] hover:bg-[#ef7674] link__register px-3 py-1.5 text-[#ef7674] rounded-3xl  bg-[#fff] ' href=''>Iniciar sesion </Link>
          <p className='link_login_active' href=''>Registrarse</p>
        </li>
      </ol>
    </>
  )
}
