import product from '../../../build/images/shop/products/prueba__product.webp'

function AddCartIcon () {
  return (
    <>
      <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd' clipRule='evenodd' d='M0 3C0 2.44772 0.447715 2 1 2H3.67703C4.08593 2 4.45364 2.24895 4.6055 2.62861L5.15407 4H21.523C22.2304 4 22.7142 4.71453 22.4514 5.37139L19.5029 12.7428C19.1992 13.5021 18.4637 14 17.6459 14H8.21106L6.87255 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.63088 18 4.29178 17.7967 4.1179 17.4711C3.94402 17.1455 3.96365 16.7506 4.16895 16.4438L6.55276 12.8819L3 4H1C0.447715 4 0 3.55228 0 3ZM8.35407 12H17.6459L20.0459 6H5.95407L8.35407 12Z' fill='white' />
        <path d='M7.5 21.25C7.5 22.2165 6.7165 23 5.75 23C4.7835 23 4 22.2165 4 21.25C4 20.2835 4.7835 19.5 5.75 19.5C6.7165 19.5 7.5 20.2835 7.5 21.25Z' fill='white' />
        <path d='M18.25 23C19.2165 23 20 22.2165 20 21.25C20 20.2835 19.2165 19.5 18.25 19.5C17.2835 19.5 16.5 20.2835 16.5 21.25C16.5 22.2165 17.2835 23 18.25 23Z' fill='white' />
      </svg>
    </>
  )
}

function ShowProduct () {
  return (
    <>
      <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M11 6C11 5.4477 10.5523 5 10 5H4C2.8954 5 2 5.8954 2 7V20C2 21.1046 2.8954 22 4 22H17C18.1046 22 19 21.1046 19 20V14C19 13.4477 18.5523 13 18 13C17.4477 13 17 13.4477 17 14V20H4V7H10C10.5523 7 11 6.5523 11 6Z' fill='white' />
        <path fillRule='evenodd' clipRule='evenodd' d='M18.5857 4H14.9999C14.4476 4 13.9999 3.5523 13.9999 3C13.9999 2.4477 14.4476 2 14.9999 2H20.9999C21.5522 2 21.9999 2.4477 21.9999 3V9C21.9999 9.5523 21.5522 10 20.9999 10C20.4476 10 19.9999 9.5523 19.9999 9V5.4142L10.4141 15C10.0236 15.3905 9.39041 15.3905 8.99991 15C8.60941 14.6095 8.60941 13.9763 8.99991 13.5858L18.5857 4Z' fill='white' />
      </svg>

    </>
  )
}

export function CardProductShow () {
  return (
    <>
      <div className='card__product__container'>
        <div className='product__container__image'>
          <img className='product__picture' src={product} alt='' />
        </div>
        <div className='flex items-center justify-between w-[260px] '>
          <h2 className='text-2xl text-[#000000e8]  font-semibold'>Nike Air Max</h2>
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='#d3413e' class='bi bi-heart-fill  mr-2 ' viewBox='0 0 16 16'>
            <path fillRule='evenodd' d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314' />
          </svg>
        </div>
        <p className='text-sm text-[#00000098]  '>Step into the Future of Comfort and Style with Nike Air Max</p>
        <div className='flex items-center justify-between w-[260px] '>
          <p className='text-[21px]  text-[#181818] font-semibold'>$39</p>
          <div className='flex items-center mr-2 justify-center gap-2'>
            <div className='bg__color__product color1' />
            <div className='bg__color__product color2' />
            <div className='bg__color__product color3' />
          </div>
        </div>
        <div className='h-[45px] w-[260px] flex gap-3'>
          <button className='bg-[#181818] hover:bg-[#ef7674] flex items-center justify-center gap-2 rounded-lg h-[45px] w-[190px] text-white'>Ver producto<ShowProduct /> </button>
          <button className='bg-[#181818] hover:bg-[#ef7674] flex items-center justify-center rounded-lg h-[45px] w-[50px]'><AddCartIcon /></button>

        </div>
      </div>
    </>
  )
}
