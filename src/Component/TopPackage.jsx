import React from "react";
import Slider from "react-slick";
import Colblock from "../assets/Col-block.png";
import Colblock1 from "../assets/Col-block1.png";
import Colblock2 from "../assets/Col-block2.png";
import Colblock3 from "../assets/Col-block3.png";
import Colblock4 from "../assets/Col-block4.png";
import Colblock5 from "../assets/Col-block5.png";
import Colblock6 from "../assets/Col-block6.png";
import Colblock7 from "../assets/Col-block7.png";

const Items = [
  {coll:Colblock,link:'#'},
  {coll:Colblock1,link:'#'},
  {coll:Colblock2,link:'#'},
  {coll:Colblock3,link:'#'},
  {coll:Colblock4,link:'#'},
  {coll:Colblock5,link:'#'},
  {coll:Colblock6,link:'#'},
  {coll:Colblock7,link:'#'},
];

const TopPackage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows:2,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="mt-20 md:m-auto md:container">
       
        <br />
        <br />
        <h1 className="text-3xl font-semibold text-black">Top Package</h1>
      <Slider {...settings}>
        {Items.map((item,index)=>(
            <div className="w-screen p-4" key={index}>
                <a href={item.link}><img className="w-full" src={item.coll} alt="img" /></a>
            </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopPackage;
