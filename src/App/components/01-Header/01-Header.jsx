import { infoButton } from './const/const'
import './styles/Header.css'

function Buttons () {
  return (
    <>
      {infoButton.map((item, index) => (
        <button
          style={{ backgroundColor: index === 0 ? '#e8e8e8' : '#a29898', color: index === 0 ? '#313131' : '#fafafa' }}
          className='py-2 font-medium px-14 rounded-md text-[15px] ml-5 mb-4'
          key={index}
        >{item}
        </button>
      ))}
    </>
  )
}
function TextInfo () {
  return (
    <div className='text-[12px] text-center mt-[150px] text-black '>
      <p className=''>*EL PRECIO
        <span className='text__span'> ANTES DE </span>
        INCENTIVO ES DE $32,90,
        <span className='text__span'> SIN </span>
        INCLUIR IMPUESTOS
        <span className='text__span'> NI CARGOS. </span>
        SUJETO A CAMBIOS.*
      </p>
      <p className='text__subrayado text-[11px] inline-block relative cursor-pointer'>MÁS INFORMACIÓN
        <span className='text__span'> SOBRE </span>
        EL AHORRO ESTIMADO
        <span className='text__span'> DE </span>
        MODA.
      </p>
    </div>
  )
}

export default TextInfo

export function TextHeader () {
  return (
    < >
      <div className='top-[60%] z-20 absolute left-[50%] -translate-x-[50%] -translate-y-[50%] '>
        <h2 className='text-[50px] pb-5 leading-none  text-center font-black text-[#000]  '>La mejor moda femenina de la ciudad</h2>
        <p className='text-center mt-5 text-[#000]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore provident maxime fuga.</p>
        <div className=' mt-16 absolute left-[12%]  '>
          <Buttons />
        </div>
        <TextInfo />
      </div>
    </>
  )
}
