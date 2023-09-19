import React from 'react'
import Slider from "react-slick";
import Deals from '../assets/hotDeals.png'

const HotDeals = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      const Item = [Deals,Deals]

  return (
    <div className='md:container md:m-auto'>
        <h1 className='text-3xl font-semibold text-black'>Hot Deals</h1>
        <br />
        <Slider
            {...settings}
        >
           {
            Item.map((item,index)=>(
                <div className='w-screen' key={index}>
                    <img className='w-full' src={item} alt="img" />
                </div>
            ))
           } 
        </Slider>
    </div>
  )
}

export default HotDeals