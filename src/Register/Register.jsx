import { HeaderRegister } from './components/Header/HeaderRegsiter'
import { NavHeader } from './components/nav/NavRegister'

export function Register () {
  return (
    <>
      <section className='w-[100%] h-[130vh] bg_login_img '>
        <header className='flex items-center justify-between w-[100%] header__content gap-10 pr-14 pl-20'>
          <HeaderRegister />
        </header>
        <NavHeader />
      </section>
    </>
  )
}
