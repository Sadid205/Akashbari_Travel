import React from "react";
import Background from "../assets/Background__holder.png";
const ChooseToor = () => {
  const items = [
    "Personalized Service",
    "24x7 Support",
    "Best Price",
    "Trusted Company",
  ];
  return (
    <div>
      <div className="m-auto md:container">
        <br />
        <br />
        <div className="justify-between md:flex">
          <div>
            <div>
              <h1 className="text-3xl font-bold">Why Choose Toor</h1>
            </div>
            <div className="grid w-full h-full gap-2 md:grid-cols-2">
              {items.map((title, index) => (
                <div className="w-full p-4" key={index}>
                  <h1 className="text-2xl font-semibold">{title}</h1>
                  <p className="text-slate-400">
                    Lorem ipsumm dolor sit amet consect <br />
                    adio picing elit seed diam nonum <br />
                    euismo tincidunt ut.
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full md:w-1/2">
            <img className="w-full h-full" src={Background} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseToor;
