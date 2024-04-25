import { Link, Outlet } from 'react-router-dom'

export function App () {
  return (
    <>
      <h1 className='text-3xl font-bold underline'> Hello Mundo!
      </h1>

      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}
