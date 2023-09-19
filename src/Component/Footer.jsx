import React from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div>
        <br />
        <br />
        <div className='py-12 bg-footerColor'>
        <div className='items-center justify-between m-auto md:flex md:container'>
            <div className='text-center md:text-start'>
                <h1 className='font-semibold text-white text-md'>akashbariholidays.com</h1>
                <br />
                <p className='text-sm text-white'>Coppyright &copy;  Akashbari 2020 All rights <br />
                reserved
                </p>
            </div>
            <div className='text-center md:text-start'>
                <h1 className='text-xl font-bold text-white'>Menu</h1>
                <br />
                <a className='text-white' href="#">Home</a>
                <a className='text-white' href="#">Explore</a>
                <a className='text-white' href="#">Travel</a>
                <a className='text-white' href="#">Blog</a>
                <a className='text-white' href="#">Pricing</a>
                
            </div>
            <div className='text-center md:text-start'>
            <h1 className='text-xl font-bold text-white'>Information</h1>
                <br />
                <a className='text-white' href="#">Destinations</a>
                <a className='text-white' href="#">Supports</a>
                <a className='text-white' href="#">Terms & Conditions</a>
                <a className='text-white' href="#">Privacy</a>
            </div>
            <div className='text-center md:text-start'>
                <h1  className='text-xl font-bold text-white'>Contact Info</h1>
                <br />
                <p className='text-white'>+88 01613 212154, +88 01701</p>
                <a className='text-white' href="#">info@akashbari.com</a>
                <p className='text-white'>Flat-17/A, Floor-19, House no-21,</p>
                <p className='text-white'>Kamal Ataturk Avenue, Banani,Dhaka-1213</p>
            </div>
            <div className='text-center md:text-start'>
               <h1 className='text-xl font-bold text-white'>Follow us on</h1>
               <div className='flex justify-center md:justify-normal item-center md:text-start'>
                <span className='text-white'><FacebookRoundedIcon/></span>
                <span className='text-white'><PinterestIcon/></span>
                <span className='text-white'><InstagramIcon/></span>
                <span className='text-white'><TwitterIcon/></span>
               </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer