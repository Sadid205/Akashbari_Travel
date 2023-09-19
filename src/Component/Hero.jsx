import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroImage from "../assets/Hero.png";
import Slider from "react-slick";
//

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="md:container md:m-auto" >
      <Slider {...settings}>
        <div className="w-screen">
            
          <img className="w-full" src={HeroImage} alt="" />
        </div>
        <div className="w-screen">
           
            <img className="w-full" src={HeroImage} alt="" />
        </div>
        <div className="w-screen">
           
            <img className="w-screen" src={HeroImage} alt="" />
        </div>
      </Slider>
     </div>
  );
};

export default Hero;
