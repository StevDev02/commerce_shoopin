import { infoButton } from './const/const'
import './styles/Header.css'

function Buttons () {
  return (
    <>
      {infoButton.map((item, index) => (
        <button
          style={{ backgroundColor: index === 0 ? '#e8e8e8' : '#636361', color: index === 0 ? '#000' : '#fff' }}
          className='py-2 font-medium px-14 rounded-md text-[15px] ml-5 mb-4'
          key={index}
        >{item}
        </button>
      ))}
    </>
  )
}

export function TextHeader () {
  return (
    < >
      <div className='top-[50%] z-10 absolute left-[50%] -translate-x-[50%] -translate-y-[50%] '>
        <h2 className='text-5xl  text-center font-medium'>La mejor moda femenina de la ciudad</h2>
        <p className='text-center mt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore provident maxime fuga.</p>
        <div className=' mt-16 absolute left-[12%]  '>
          <Buttons />
        </div>
      </div>
    </>
  )
}
