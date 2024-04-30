import { HeaderLogin } from './components/Header/HeaderLogin'
import { NavHeader } from './components/nav/Nav'

export function Login () {
  return (
    <>
      <section className='w-[100%] h-[100vh] bg_login_img '>
        <NavHeader />
        <header className='flex items-center justify-between w-[100%] header__content gap-10 px-20'>
          <HeaderLogin />
        </header>
      </section>
    </>
  )
}
