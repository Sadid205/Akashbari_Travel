import React from 'react'
import imageContainer1 from '../assets/ImageContainer1.png';
import imageContainer2 from '../assets/ImageContainer2.png';
import imageContainer3 from '../assets/ImageContainer3.png';
import imageContainer4 from '../assets/ImageContainer4.png';
import imageContainer5 from '../assets/ImageContainer5.png';
import imageContainer6 from '../assets/ImageContainer6.png';
import Rating from '../assets/Rating.png'
import { Link } from 'react-router-dom';



const Offers = [
    {item:imageContainer1,link:'#',title:"Lisbon, Portugal",rating:Rating,price:'1,95,000TK'},
    {item:imageContainer2,link:'#',title:"Athens, Greece",rating:Rating,price:'59,900TK'},
    {item:imageContainer3,link:'#',title:"Rome , Italy",rating:Rating,price:'85,000TK'},
    {item:imageContainer4,link:'#',title:"Lisbon, Portugal",rating:Rating,price:'1,95,000TK'},
    {item:imageContainer5,link:'#',title:"Athens, Greece",rating:Rating,price:'59,900TK'},
    {item:imageContainer6,link:'#',title:"Rome , Italy",rating:Rating,price:'85,000TK'},
]


const SpecialOffers = () => {


  return (
    <div className='m-auto md:container'>
      <h1 className='text-3xl font-semibold'>Special Offers</h1>      
      <div className='justify-center md:flex'>
        <div className='grid gap-3 md:grid-cols-3'>
            {
                Offers.map((opt,index)=>(
                  <Link key={index} to={opt.link}>
                     <div className='p-2 mt-12 rounded-xl'>
                        <img src={opt.item} alt="image" />
                        <div className='p-2'>
                            <h1 className='text-2xl text-slate-400 text-semi-bold'>{opt.title}</h1>
                            <img src={opt.rating} alt="rating" />
                            <br />
                            <p className='font-sans text-xs md:text-lg text-black-500'>5 nights and 4 days in 5 star hotel, breakfast and <br />
                                lunch included.Very popular during the <br />
                                renaissance. Passage and going through the cites <br />
                                of the world in classical literature.
                            </p>
                            <br />
                           <div className='flex'>
                            <h1 className='text-slate-600'>From</h1>
                            <h1 className='ml-2 font-semibold text-signup'>{opt.price}</h1>
                            <button className='px-4 py-2 ml-16 font-semibold text-white rounded-md bg-signup'>DETAILS</button>
                           </div>
                        </div>
                    </div>
                  </Link>
                ))
            }
        </div>
    </div>
    </div>
  )   
}

export default SpecialOffers