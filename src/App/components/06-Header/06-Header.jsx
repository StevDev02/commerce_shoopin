import './style/Header_06.css'

export function HeaderText06 () {
  return (
    <>
      <div className='z-20 absolute text-7xl  font-black -translate-x-[0%] text-center -translate-y-[50%] top-[20.33%] left-[18%]  '>
        <h2 className='-tracking-[6px] bg-[#000] bg-clip-text text-transparent'>SABATA COMMERCE SHOP</h2>
        <h2 className='-tracking-[6px] bg-[#000] bg-clip-text text-transparent '>TIENDA FISICA - VIRTUAL</h2>
        <h2 className='-tracking-[6px] bg-[#000] bg-clip-text text-transparent '>MODA FEMENINA</h2>
      </div>

      <div className='z-20 absolute top-[3%] -right-[6%]  translate-y-[50%] -translate-x-[50%] '>
        <p className='font-medium text-center text-[#000000c0]'>WWW.SABATA</p>
        <p className='text-4xl font-black text-[#000000c0] -tracking-[3px] '>E-COMMERCE</p>
      </div>

      <footer className=' '>
        <div class='col z-20 -translate-x-[0%] absolute -translate-y-[50%] top-[50%] left-[10%]  '>
          <h4 className='font-black text-lg'>Colección de moda femenina</h4>
          <a className='text-[#000] links__a__e relative hover:text-[#2b2b2b] ' href='#'>Explora vestidos elegantes y versátiles</a>
          <a className='text-[#000] links__a__e relative hover:text-[#2b2b2b]' href='#'>Descubre las últimas tendencias</a>
          <a className='text-[#000] links__a__e relative hover:text-[#2b2b2b]' href='#'>Encuentra tu ajuste perfecto</a>
          <a className='text-[#000] links__a__e relative hover:text-[#2b2b2b]' href='#'>Completa tu look con nuestros accesorios</a>
          <a className='text-[#000] links__a__e relative hover:text-[#2b2b2b]' href='#'> ¡Compra ahora!</a>
        </div>

        {/* <div className='-translate-x-[0%] absolute -translate-y-[50%] top-[62%] left-[12%] '>
          <div className='w-[150px] h-[150px] bg-[#75a04d] rounded-full circle__logo relative ' />
        </div> */}

        <div class='col z-20 -translate-x-[0%] absolute -translate-y-[50%] top-[50%] left-[70%] text-center'>
          <h4 className='font-black text-lg'>Descubre quiénes somos</h4>
          <a className='text-[#000] links__a__e relative hover:text-[#2b2b2b] ' href='#'>Nuestra historia: Cómo empezó... </a>
          <a className='text-[#000] links__a__e relative hover:text-[#2b2b2b]' href='#'>Nuestro equipo: Conoce a las personas...</a>
          <a className='text-[#000] links__a__e relative hover:text-[#2b2b2b]' href='#'>Nuestra misión: Descubre nuestra visión...</a>
          <a className='text-[#000] links__a__e relative hover:text-[#2b2b2b]' href='#'>Nuestra comunidad: Una comunidad femenina</a>
          <a className='text-[#000] links__a__e relative hover:text-[#2b2b2b]' href='#'>Contáctanos: ¿Tienes alguna o comentario?</a>
        </div>
      </footer>

    </>

  )
}
