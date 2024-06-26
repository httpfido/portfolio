import React from "react";
// import brands data
import { brands } from "../data";

const Brands = () => {
  return (
    <section
      id="home"
      className="bg-shadow w-full flex items-center transition-all duration-100"
    >
      <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly ">
        {brands.map((brand, index) => {
          const { href } = brand;
          return (
            <div key={index}>
              <a href={href} target="_blank" rel="noreferrer">
                <img src={brand.img} alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
