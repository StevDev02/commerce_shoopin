function CardTime () {
  return (
    <>
      <div className='text-2xl font-medium card flex items-center justify-center flex-col ml-10'>
        <p className='text-3xl'><span className='ml-6'>23</span><span className='ml-6'>12</span><span span className='ml-6'>09</span></p>
        <p><span className='ml-6'>HH</span><span className='ml-6'>MM</span><span span className='ml-6'>SS</span></p>
      </div>
    </>
  )
}

export default CardTime

export function Header02 () {
  return (
    <>
      <section className='absolute top-[50%]  -right-[15%] -translate-x-[50%] -translate-y-[50%]   '>
        <header>
          <h2 className='text-4xl font-medium'>¡Ofertas de Verano!</h2>
          <p className='text-xl'>Porque la lenceria es la pasion y llama de tu pareja.</p>
          <br />
          <h3 className='text-2xl font-medium'>Aprovecha nuestras ¡Ofertas!</h3>
          <p className='text-xl'>¡Preparate para una experiencia en la que las<br /> compras sexi ganan!</p>
          <br />
          <p className='text-xl font-medium'>Una experiencia de compra limitada.</p>
          <br />
          <button className='py-2 font-medium px-14 rounded-md text-[15px] ml-5 mb-4 bg-[#e8e8e8]  '>Ver Ofertas</button>
          <br /><br />
          <CardTime />
        </header>
      </section>
    </>
  )
}
