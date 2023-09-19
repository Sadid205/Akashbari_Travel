import React from "react";
import image1 from "../assets/Container1.png";
import image2 from "../assets/Container2.png";
import image3 from "../assets/Container3.png";
import image4 from "../assets/Container4.png";
import Ractangle from '../assets/Rectangle92.png';
import Ractangle1 from '../assets/Rectangle95.png';

const Tours = () => {
  const Container = [image1, image2, image3, image4];

  return (
    <div className="">
      <br />
      <br />
      <div className="ml-10 md:m-auto justify-evenly md:container md:flex">
        <div>
          <h1 className="font-serif text-4xl font-semi-bold">Tours</h1>
          <br />
          <p className="font-sans text-slate-400">
            20 years from now you will <br />
            be more disappointed by <br />
            the things that you didn`t <br />
            do. Stop regretting and <br />
            start travelling. start <br />
            throwing off the bowlines.
          </p>
            <br />
          <div className="relative w-32 px-1 py-2 overflow-visible text-white rounded-md hover:cursor-pointer bg-signup">
            View all trip plan
            <div className="absolute w-8 h-8 -z-10 bg-footerColor -top-5 -left-5">
              
            </div>
            <div className="absolute w-8 h-8 -z-20 bg-ractangle -bottom-5 -right-5">
             
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="grid gap-14 md:gap-2 md:grid-cols-4">
          {Container.map((image, index) => (
            <div
              className="transition-all duration-300 ease-in hover:cursor-pointer hover:-translate-y-10"
              key={index}
            >
              <img src={image} alt="image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
