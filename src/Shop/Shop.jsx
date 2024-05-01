import { Outlet } from 'react-router-dom'
import { NavHeaderShop } from './components/nav/NavShop'
import { FilterProducts } from './components/Filters'

export function Shop () {
  document.title = 'Sabata - Tienda'
  return (
    <>
      <NavHeaderShop />
      <section className='w-[100%] h-[100vh] relative '>
        <section className='sticky top-0 left-0  p-5 w-[20%]   border border-black border-l-transparent border-b-transparent border-t-transparent '>
          <FilterProducts />
        </section>
        <header className='absolute top-0 right-0   p-5 w-[80%] h-[100%]'>
          <div id='detail' className=' w-[100%] h-[100%]'>
            <h2>Productos</h2>
            <section className='flex flex-wrap gap-5'>
              <Outlet />
            </section>
          </div>
        </header>
      </section>
    </>
  )
}
