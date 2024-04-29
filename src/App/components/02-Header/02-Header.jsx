import './style.css/style.css'

const infoButton = ['Comprar Ahora', 'Explorar Ofertas']

function Buttons () {
  return (
    <>
      {infoButton.map((item, index) => (
        <button
          style={{ backgroundColor: index === 0 ? '#607f9ce3' : '#e8e8e8', color: index === 0 ? '#fff' : '#313131' }}
          className='py-2 font-medium px-14 rounded-md text-[15px] ml-5 mb-4'
          key={index}
        >{item}
        </button>
      ))}
    </>
  )
}

export function Header02 () {
  return (
    <>
      <section className='absolute top-[55%] z-20 -right-[18%] -translate-x-[50%] -translate-y-[50%]   '>
        <header className='text-center'>
          <h2 className='text-5xl font-black text-[#000] text pb-6'>¡Llegaron las ofertas de<br /> verano!</h2>
          <p className='text-base text-[#000] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, <br /> Lorem ipsum dolor sit amet. </p>
          <div className='mt-[70px] pb-10 '>
            <Buttons />
          </div>
          <div>
            <p className='cursor-pointer text-[12px] relative inline-block text-black'>*LAS OFERTAS
              <span className='text__span'> TIENEN </span>
              TIEMPO LIMITADO
              <span className='text__span'> O HASTA </span>
              GASTAR STOCK.
              <span className='text__span'> NO </span>
              SE PUEDE CANCELAR.
            </p>
            <br />
            <p className='cursor-pointer text-[11px] text_Card relative inline-block'>
              <span className='text__span'> MÁS </span>
              INFORMACIÓN
              <span className='text__span'> SOBRE </span>
              NUESTRAS OFERTAS
            </p>
          </div>
        </header>
      </section>
    </>
  )
}
