import { Outlet } from 'react-router-dom'
import { NavHeaderShop } from './components/nav/NavShop'

export function Shop () {
  return (
    <>
      <NavHeaderShop />
      <section className='w-[100%] h-[100vh] flex '>
        <section className='p-5 w-[350px] h-[100%] border border-black border-l-transparent border-b-transparent border-t-transparent '>
          <header className=''>
            <h2>Filtros</h2>
          </header>
        </section>
        <header className='p-5 w-[100%] h-[100%]'>
          <div id='detail' className='w-[100%] h-[100%]'>
            <h2>Productos</h2>
            <Outlet />
          </div>
        </header>
      </section>
    </>
  )
}
