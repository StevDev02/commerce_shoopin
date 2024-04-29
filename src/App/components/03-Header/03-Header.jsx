function TextMenu () {
  return (
    <>
      <ol className='z-20 text-black text-[12px] flex gap-5 cursor-pointer absolute top-[30%] left-[15%]  translate-y-[50%] -translate-x-[50%] '>
        <li className='text_menu inline-block relative'>MUJER</li>
        <li className='text_menu inline-block relative'>HOMBRES</li>
        <li className='text_menu inline-block relative'>NIÑOS</li>
      </ol>
    </>
  )
}

function TextHeader () {
  return (
    <>
      <div className='z-20 absolute bottom-[10%] left-[50%]  translate-y-[50%] -translate-x-[50%] text-center text-[#000]  '>
        <div>
          <p className='z-20 span__text text-sm'>WORKING ON PROJECTS FOR</p>
          <p className='text-2xl font-black text-[#000]'> <span className='-tracking-[3px]  '>BRAND</span><span className='text-transparent text-[8px]  '>o</span> <span className='-tracking-[3px]  '>DIRECTION</span><span className='text-transparent text-[8px]'>o</span> <span className='-tracking-[3px]  '>DIGITAL</span> </p>
        </div>
        <div>
          <p className='text-sm'>COLLABORATING
            <span className='span__text text-[10px]  '>WITH</span>
            AMBITIOUS BRANDS
            <span className='span__text text-[10px]  '>THAT HAVE</span>
            POWERFUL STORIES
            <span className='span__text text-[10px]  '>TO TELL</span><br />
            <span className='span__text text-[10px]  '>I WORK</span>
            INDEPENDENTLY
            <span className='span__text text-[10px]  '>AND WITH CREATIVE</span>
            FREELANCERS, STUDIOS
            <span className='span__text text-[10px]  '>AND</span>
            AGENCIES
          </p>
        </div>
      </div>
    </>
  )
}

function TextHead () {
  return (
    <>
      <div className='absolute top-[8%] -right-[6%]  translate-y-[50%] -translate-x-[50%] z-20'>
        <p className='font-medium text-center text-[#000]'>WWW.SABATA</p>
        <p className='text-4xl font-black text-[#000] -tracking-[3px] '>E-COMMERCE</p>
      </div>
    </>
  )
}

function TextTitle () {
  return (
    <>
      <div className='absolute top-[50%] left-[50%]  translate-y-[50%] -translate-x-[50%]'>
        <h2 className='text__title' />
      </div>
    </>
  )
}

export default TextTitle

export function Header03 () {
  return (
    <>
      <svg aria-label='Logotipo de ZARA Ecuador. Ir a la página principal' class='z-20 w-[20%] absolute top-[5%] left-[15%]  translate-y-[50%] -translate-x-[50%] ' viewBox='0 0 132 55' xmlns='http://www.w3.org/2000/svg'><path fill='black' fill-rule='evenodd' clip-rule='evenodd' d='M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z' /></svg>
      <TextMenu />
      <TextTitle />
      <TextHeader />
      <TextHead />
    </>
  )
}
