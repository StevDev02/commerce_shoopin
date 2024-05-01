import { Link } from 'react-router-dom'

export function LogoNavShop () {
  return (

    <div className='flex items-center gap-5'>
      <Link to='/' className='tracking-[5px]'>SABATA</Link>
      <div className='w-[2px] h-[15px] bg-black  ' />
      <p className='tracking-[2px] '>TIENDA</p>
    </div>

  )
}
