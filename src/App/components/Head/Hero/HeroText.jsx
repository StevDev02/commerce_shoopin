import './../../Head/styles/Nav.css'

export function HeroText () {
  return (
    <>
      <h4 className='text-[25px]  '>¡Bienvenidos!</h4>
      <h2 className='text-[35px] -mt-1 '>Tienda de online</h2>
      <h1 className='text-[55px] -mt-2 '> Sabata</h1>
      <p className='text-[17px] -mt-1 '> Calidad, estilo y variedad.<br /> La moda que se adapta a todos los estilos y personalidades</p>
      <button className='mt-4 text-[16px] bg-[#d7bb97] text-[#3d352a] hover:text-[#d7bb97] hover:bg-[#3d352a] transition-[.5s] rounded-lg p-2   '>¡Comprar Ahora!</button>
    </>
  )
}
