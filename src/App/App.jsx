import { NavHeader } from './components/Head/Nav/components/Nav'
import { VideoNav } from './components/Head/Video/Video'
import { HeroText } from './components/Head/Hero/HeroText'
import { TextHeader } from './components/01-Header/01-Header'
import './components/01-Header/styles/Header.css'
import './components/02-Header/style.css/style.css'
import './components/Head/styles/Nav.css'
import './components/03-Header/style/style_header_03.css'
import './components/06-Header/style/Header_06.css'
import { Header02 } from './components/02-Header/02-Header'
import { Header03 } from './components/03-Header/03-Header'
import { HeaderVideo04 } from './components/04-Header/04-Header'
import { HeaderText06 } from './components/06-Header/06-Header'
import { Footer } from './components/06-Header/Footer'

export function App () {
  return (
    <>
      <section className='relative w-[100%] h-[100vh] head__video__gradient '>
        <div className='z-10 bg-[#00000023] w-[100%] h-[100vh] absolute top-0 left-0 cursor-pointer' />
        <VideoNav />
        <header className='absolute w-[100%] top-0 left-0 p-2 text-white text-[15px] font-medium z-20'>
          <NavHeader />
        </header>
        <section className='absolute top-[50%] left-[25%] text-white z-10 -translate-y-[50%] -translate-x-[50%] p-10 '>
          <HeroText />
        </section>
      </section>
      <main className='relative'>

        {/* <div className='z-10 bg-[#fafafa23] w-[100%] h-[100vh] fixed top-0 left-0 cursor-pointer' /> */}

        <section className=' w-[100%] h-[110vh] relative img_bg_header_one'>
          <img className='img_header max-w-[40%] -mt-[125px] -top-[5%] absolute left-[24.2%] -translate-x-[50%] ' src='https://s3.eu-central-1.amazonaws.com/commerce.sabata.almacenamiento/images/01-foto-head.png' alt='' />
          <TextHeader />
          <img className='img_header  max-w-[34%] -mt-[125px] top-[15%] absolute left-[80%] -translate-x-[50%] ' src='https://s3.eu-central-1.amazonaws.com/commerce.sabata.almacenamiento/images/02-foto-head.png' alt='' />
        </section>

        <section className='w-[100%] h-[110vh] relative mt-[0px] img_bg-header-02'>
          <Header02 />
        </section>

        <section className='w-[100%] h-[110vh] relative img_bg_header_03 '>
          <Header03 />
        </section>

        <section className='w-[100%] relative h-[110vh] img_bg_header_04'>
          <HeaderVideo04 />
          <img className='img_header max-w-[45%] -z-0 opacity-90 top-[35%] absolute left-[75%] -translate-y-[50%] -translate-x-[50%] ' src='https://i.ibb.co/M2wcYPd/prueba1.png' alt='' />
        </section>

        <section className='w-[100%] h-[260vh] relative img_bg_header_06'>
          <HeaderText06 />
        </section>

        <Footer />
      </main>

      {/* <div id='detail'>
        <Outlet />
      </div> */}
    </>
  )
}
