function IconSearch () {
  return (
    <>
      <svg className='ml-2' width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path fill-rule='evenodd' clip-rule='evenodd' d='M10.502 2C5.80753 2 2.00195 5.80558 2.00195 10.5C2.00195 15.1944 5.80753 19 10.502 19C12.4884 19 14.3169 18.3176 15.7637 17.176L20.5877 22C20.9783 22.3905 21.6114 22.3905 22.002 22C22.3925 21.6095 22.3925 20.9763 22.002 20.5858L17.1779 15.7618C18.3196 14.3149 19.002 12.4865 19.002 10.5C19.002 5.80558 15.1964 2 10.502 2ZM4.00195 10.5C4.00195 6.91015 6.9121 4 10.502 4C14.0918 4 17.002 6.91015 17.002 10.5C17.002 12.2952 16.2755 13.9188 15.0981 15.0962C13.9208 16.2736 12.2972 17 10.502 17C6.9121 17 4.00195 14.0899 4.00195 10.5Z' fill='black' />
      </svg>

    </>
  )
}

function IconClose () {
  return (
    <>
      <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M17.6585 4.92888C18.049 4.53836 18.6822 4.53835 19.0727 4.92888C19.4632 5.3194 19.4632 5.95257 19.0727 6.34309L13.4158 12L19.0727 17.6568C19.4632 18.0473 19.4632 18.6805 19.0727 19.071C18.6822 19.4615 18.049 19.4615 17.6585 19.071L12.0016 13.4142L6.34481 19.071C6.3387 19.0771 6.33254 19.0831 6.32632 19.089C5.93455 19.4614 5.31501 19.4554 4.93059 19.071C4.6377 18.7781 4.56447 18.3487 4.71092 17.9876C4.75973 17.8672 4.83296 17.7544 4.93059 17.6568L10.5874 12L4.93059 6.34314C4.54006 5.95262 4.54006 5.31945 4.93059 4.92893C5.32111 4.5384 5.95428 4.5384 6.3448 4.92893L12.0016 10.5857L17.6585 4.92888Z' fill='gray' />
      </svg>
    </>
  )
}

function IconEnter () {
  return (
    <>
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M8.54778 18.5408L15.0885 12L8.54778 5.4593C8.49896 5.41049 8.45625 5.35788 8.41964 5.30243C8.18883 4.95287 8.20053 4.49031 8.45472 4.1522C8.48279 4.11487 8.5138 4.07906 8.54778 4.04509C8.65218 3.94069 8.77392 3.8642 8.90373 3.81562C9.0774 3.75062 9.26552 3.73558 9.44588 3.7705C9.63497 3.80711 9.81554 3.89864 9.96199 4.04509L17.2098 11.2929C17.3974 11.4805 17.5027 11.7348 17.5027 12C17.5027 12.2653 17.3974 12.5196 17.2098 12.7072L9.96199 19.955C9.57146 20.3455 8.9383 20.3455 8.54778 19.955C8.49896 19.9062 8.45625 19.8536 8.41964 19.7981C8.16335 19.41 8.20607 18.8825 8.54778 18.5408Z' fill='black' />
      </svg>

    </>
  )
}

export function FilterProducts () {
  return (
    <>
      <header className='flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
          <h3 className=' text-gray-400 font-medium text-lg '>Filtros</h3>
          <button className=''><IconClose /></button>
        </div>
        <form className='bg-transparent flex items-center py-2.5 border border-zinc-400 rounded-lg'>
          <IconSearch />
          <input className='text-sm ml-3 focus:outline-none bg-transparent text-zinc-600 w-[150px] ' type='text' placeholder='Tacones, blusas...' />
          <button><IconEnter /></button>
        </form>
        <p>Nuevos</p>
        <p>Precio</p>
        <p>Talla</p>
        <p>Colores</p>
        <p>Tendencias</p>

      </header>
    </>
  )
}
