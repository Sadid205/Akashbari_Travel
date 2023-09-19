import React, { useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Slider from "react-slick";
import Gallery1 from "../assets/Gallery1.png";
import Gallery2 from "../assets/Gallery2.png";
import Gallery3 from "../assets/Gallery3.png";
import Gallery4 from "../assets/Gallery4.png";

const Gallery = () => {
  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider = useRef(null);
  const next = () => {
    slider?.current.slickNext();
  };
  const prev = () => {
    slider?.current.slickPrev();
  };
  const Picture = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
  ];
  return (
    <div className="">
      <br />
      <br />
      <div className="relative md:container md:m-auto">
        <h1 className="text-3xl font-semibold">
          Destination Gallery
        </h1>
        <div className="w-32 border-b-2 border-signup">

        </div>
        <br />
        <p className=" text-slate-400">Our photo gallery on trip</p>
        <br />
        <Slider ref={slider} {...settings}>
          {Picture.map((item, index) => (
            <div key={index}>
              <div className="transition-all duration-300 ease-in hover:-translate-y-5">
                <img src={item} alt="image" />
              </div>
            </div>
          ))}
        </Slider>
        <div className="absolute top-0 right-0 flex">
          <div onClick={prev} className="p-1 rounded-md bg-signup hover:cursor-pointer">
            <ArrowBackIosNewIcon />
          </div>
          <div onClick={next} className="p-1 ml-4 rounded-md bg-signup hover:cursor-pointer">
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
