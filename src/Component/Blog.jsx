import React, { useRef } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import EastIcon from '@mui/icons-material/East';
import Slider from "react-slick";
import Group1 from "../assets/Group124.png";
import Group2 from "../assets/Group63.png";
import Group3 from "../assets/Group124.png";
import Group4 from "../assets/Group7.png";
import { Link } from "react-router-dom";

const Blog = () => {
  const Groups = [
    Group1,
    Group2,
    Group3,
    Group4,
    Group1,
    Group1,
    Group2,
    Group3,
    Group4,
    Group1,
    Group2,
    Group3,
    Group4,
    Group1,
    Group2,
    Group3,
    Group4,
  ];
  const slideRef = useRef(null);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    rows:2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows:2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          rows:2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows:1
        }
      }
    ],
  };

  const next = () => {
    slideRef?.current?.slickNext();
  };
  const previous = () => {
    slideRef?.current.slickPrev();
  };

  return (
    <div>
        <div className="top-20">
      <div className="relative mt-24 mx-14 md:m-auto md:container">
      <h1 className="text-xl font-semibold md:text-3xl">Our Blog and Articles</h1>
        <Slider ref={slideRef} {...settings}>
          {Groups.map((image, index) => (
            <div className="flex mt-4" key={index}>
              <div>
                {" "}
                <img src={image} alt="image" />
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-400">Lorem Ipsum</p>
                <h1 className="font-sans text-2xl font-semibold ">
                  Lorem Ipsum is simply <br />
                  dummy text.
                </h1>
                <p className="text-md text-slate-600">
                  Lorem ipsum is simply dummy text <br />
                  of the printing and typesetting industry.
                </p>
                <br />
                <Link to={'#'}>
                <button className="text-blue-500">Read More <span className="ml-2"><EastIcon/></span></button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        <div className="absolute top-0 right-0 flex justify-between md:right-14">
          <div onClick={previous} className="p-1 mr-2 border rounded-md bg-signup">
            <span>
              <GrPrevious />
            </span>
          </div>
          <div onClick={next} className="p-1 border rounded-md bg-signup">
            <span>
              <GrNext />
            </span>
          </div>
        </div>
      </div>
    
    </div>
    </div>
  );
};

export default Blog;
