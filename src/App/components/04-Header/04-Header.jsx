import './style.css/Header_04.css'

const infoButton = ['Explorar', 'Conocer']

function Buttons () {
  return (
    <>
      {infoButton.map((item, index) => (
        <button
          style={{ backgroundColor: index === 0 ? '#b7c2aa' : '#46474b', color: index === 0 ? '#313131' : '#fafafa' }}
          className='py-2 font-medium px-20 rounded-md text-[14px] ml-5 mb-4 '
          key={index}
        >{item}
        </button>
      ))}
    </>
  )
}

export function HeaderVideo04 () {
  return (
    <div className='z-20'>
      <div className='z-20 w-[100%] text-center absolute -translate-x-[50%] -translate-y-[50%] top-[40%] left-[30%] '>
        <h2 className='text-[#000] font-black text-5xl  '>Por que explorar es un estilo <br /> de vida</h2>
        <p className='mt-5 text-[#000]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, explicabo!</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <div className=' z-20 absolute -translate-x-[50%] -translate-y-[50%] top-[80%] left-[28%]'>
          <Buttons />
        </div>
      </div>
      <div className='z-20 text-center absolute -translate-x-[50%] -translate-y-[50%] top-[90%] left-[30%]'>
        <p className='text-[11px] '>*EL PRECIO
          <span className='text__span'> ANTES DE </span>
          INCENTIVO ES DE $32,90,
          <span className='text__span'> SIN </span>
          INCLUIR IMPUESTOS
          <span className='text__span'> NI CARGOS. </span>
          SUJETO A CAMBIOS.*
        </p>
      </div>
    </div>
  )
}
