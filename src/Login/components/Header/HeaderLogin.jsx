import { Link } from 'react-router-dom'
import img from '../../../../build/images/App/02-foto-head.png'
import '../../style/style.css'
import facebook from '../../../../build/images/Login/icons/facebook.png'
import google from '../../../../build/images/Login/icons/google.png'
import iphone from '../../../../build/images/Login/icons/Iphone.png'

function IconAlert () {
  return (
    <>
      <svg className='-mt-[15px] ' width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12.777 7.64141C12.7824 7.36157 12.557 7.13182 12.2771 7.13182H11.7193C11.4394 7.13182 11.214 7.36157 11.2194 7.64141L11.3248 13.1359C11.33 13.4083 11.5523 13.6263 11.8247 13.6263H12.1717C12.4441 13.6263 12.6664 13.4083 12.6716 13.1359L12.777 7.64141Z' fill='red' />
        <path d='M11.3198 16.763C11.5084 16.9484 11.7353 17.0411 12.0006 17.0411C12.1732 17.0411 12.3314 16.9979 12.4752 16.9117C12.619 16.8254 12.7341 16.7103 12.8204 16.5665C12.9099 16.4195 12.9562 16.2581 12.9594 16.0823C12.9562 15.8202 12.8603 15.5965 12.6718 15.4111C12.4832 15.2226 12.2595 15.1283 12.0006 15.1283C11.7353 15.1283 11.5084 15.2226 11.3198 15.4111C11.1313 15.5965 11.0386 15.8202 11.0418 16.0823C11.0386 16.3476 11.1313 16.5745 11.3198 16.763Z' fill='red' />
        <path fillRule='evenodd' clipRule='evenodd' d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5Z' fill='red' />
      </svg>

    </>
  )
}

function HeaderTextLogin () {
  return (
    <>
      <div className='relative'>
        <h2 className='font-semibold text-center text-4xl -leading-5 pb-12'>Inicia sesión en<br />
          Sabata directamente
        </h2>
        <div className='flex ml-7'>
          <p className='text-sm'>Si no tienes una cuenta, puedes </p>
          <Link to='/ec/register' className='z-10 ml-1 text-[#ef7674] text-sm cursor-pointer '> Registrarte aquí.</Link>
        </div>
        <p className='text-center text-sm'>Y unete a nuestra comunidad.</p>
        <div className='bg_text_login -z-0' />
        <div className='bg_text_login2 -z-0' />
      </div>
    </>
  )
}

function HeaderForm () {
  return (
    <>
      <form className='grid text-xs gap-4 text-zinc-600 pt-10' action=''>
        <h2 className='text-base font-extralight text-black'>ACCEDE A TU CUENTA</h2>
        <input
          type='email'
          placeholder='EMAIL'
          x-data='{ focused: false }'
          className='w-[300px] placeholder-up focus:placeholder:-mt-4 focus:outline-none h-[45px] border border-r-transparent border-l-transparent bg-transparent pt-1 border-t-transparent border-b-zinc-300 inputLogin'
        />
        <div className='-mt-3'>
          <p className='text-[9px] ml-[17px] -mt-[0px] text-red-500 '>Introduce una dirección de email válida.</p>
          <IconAlert />
        </div>

        <input
          type='password'
          placeholder='CONTRASEÑA'
          className='inputLogin bg-transparent pt-1 w-[300px] h-[45px] pr-2 focus:outline-none border border-r-transparent border-l-transparent border-t-transparent border-b-zinc-300'
        />
        <div className='-mt-3'>
          <p className='text-[9px] ml-[17px] -mt-[0px] text-red-500 '>Este campo es obligatorio.</p>
          <IconAlert />
        </div>

        <div />

        <button className='w-[300px] border py-2 rounded-sm border-zinc-500 hover:text-zinc-400 mt-3'>INICIAR SESION</button>

        <div className='flex items-center justify-center gap-2 pt-5 pb-5'>
          <div className='w-[110px] h-[1px] bg-[#00000018] ' /> <label className='text-xs text-[#00000080] '>O inicia con</label><div className='w-[110px] h-[1px] bg-[#00000018] ' />
        </div>
        <div className='flex items-center justify-center gap-5'>
          <img className=' border rounded-lg px-6 py-2 ' src={google} alt='' />
          <img className=' border rounded-lg px-6 py-2' src={iphone} alt='' />
          <img className=' border rounded-lg px-6 py-2' src={facebook} alt='' />
        </div>

      </form>

    </>
  )
}

export function HeaderLogin () {
  return (
    <>
      <HeaderTextLogin />
      {/* <img className='img_header_login max-w-[25%]  ' src={img} alt='Imagen' /> */}
      <HeaderForm />
    </>
  )
}
