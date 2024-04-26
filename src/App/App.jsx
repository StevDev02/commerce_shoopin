import { Outlet } from 'react-router-dom'
import { NavHeader } from './components/Head/Nav/components/Nav'
import { VideoNav } from './components/Head/Video/Video'
import { HeroText } from './components/Head/Hero/HeroText'
import { TextHeader } from './components/01-Header/01-Header'
import './components/01-Header/styles/Header.css'
import './components/02-Header/style.css/style.css'
import { Header02 } from './components/02-Header/02-Header'

export function App () {
  return (
    <>
      <section className='relative w-[100%] h-[100vh]  '>
        <VideoNav />
        <div className='z-10 bg-[#00000066] w-[100%] h-[100vh] absolute top-0 left-0 cursor-pointer' />
        <header className='absolute w-[100%] top-0 left-0 p-2 text-slate-100 text-[15px] font-medium z-20'>
          <NavHeader />
        </header>
        <section className='absolute top-[50%] left-[25%] text-[#fafafa] z-10 -translate-y-[50%] -translate-x-[50%] p-10 '>
          <HeroText />
        </section>
      </section>

      <section className=' w-[100%] h-[90vh] relative mt-[100px]'>
        <img className='img_header max-w-[40%] -mt-[125px] -top-[15%] absolute left-[20%] -translate-x-[50%] ' src='./images/02-foto-head.png' alt='' />
        <TextHeader />
        <img className='img_header  max-w-[34%] -mt-[125px] top-[8%] absolute left-[80%] -translate-x-[50%] ' src='./images/01-foto-head.png' alt='' />
      </section>

      <section className='w-[100%] h-[95vh] relative mt-[150px] img_bg-header-02'>
        <Header02 />
      </section>

      <section className='w-[100%] h-[90vh] relative mt-[150px]'>
        <h1>Hi</h1>
      </section>

      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}
