import React, { useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Slider from "react-slick";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import Rating from "../assets/Rating.png";

const Experiences = () => {
  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 3,
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
    { photo: Avatar1, name: "John Doe", profession: "Accountant" },
    { photo: Avatar2, name: "John Smith", profession: "Journalist, HWO News" },
    {
      photo: Avatar3,
      name: "Tamara Bellis",
      profession: "Managing Director.JTH",
    },
    { photo: Avatar1, name: "John Doe", profession: "Accountant" },
    { photo: Avatar2, name: "John Smith", profession: "Journalist, HWO News" },
    {
      photo: Avatar3,
      name: "Tamara Bellis",
      profession: "Managing Director.JTH",
    },
    { photo: Avatar1, name: "John Doe", profession: "Accountant" },
    { photo: Avatar2, name: "John Smith", profession: "Journalist, HWO News" },
    {
      photo: Avatar3,
      name: "Tamara Bellis",
      profession: "Managing Director.JTH",
    },
  ];
  return (
    <div className="">
      <br />
      <br />
      <div className="relative md:container md:m-auto">
        <h1 className="text-3xl font-semibold">
          Traveler`s <br />
          Experiences
        </h1>
        <div className="border-b-2 w-36 border-signup"></div>
        <br />
        <p className=" text-slate-400">Here some awesome feedback</p>
        <br />
        <Slider ref={slider} {...settings}>
          {Picture.map((item, index) => (
            <div key={index} className="p-4">
              <div className="">
                <div className="w-20">
                  <img src={item.photo} alt="profilePicture" />
                </div>
                <div>
                  <p className="text-md text-slate-600">
                    But i must explain to you how all this mistaken idea of{" "}
                    <br />
                    denouncing pleasure and praising pain was born and I <br />
                    will give you a complete account of the system and <br />
                    expound the actual teachings of the great explorer of the
                    <br />
                    truth, the master-builder of human happiness.
                  </p>
                </div>
              </div>
              <br />
              <img src={Rating} alt="rating" />
              <h1 className="text-2xl font-semibold text-slate-600">
                {item.name}
              </h1>
              <h2 className="font-semibold text-md text-slate-600">
                {item.profession}
              </h2>
            </div>
          ))}
        </Slider>
        <div className="absolute top-0 right-0 flex">
          <div
            onClick={prev}
            className="p-1 rounded-md bg-signup hover:cursor-pointer"
          >
            <ArrowBackIosNewIcon />
          </div>
          <div
            onClick={next}
            className="p-1 ml-4 rounded-md bg-signup hover:cursor-pointer"
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
