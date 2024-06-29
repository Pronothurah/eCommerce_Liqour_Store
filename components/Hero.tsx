// *********************
// Role of the component: Classical hero component on home page
// Name of the component: Hero.tsx
// Developer: Onsongo Onditi
// Version: 1.0
// Component call: <Hero />
// Input parameters: no input parameters
// Output: Classical hero component with two columns on desktop and one column on smaller devices
// *********************

import Image from "next/image";
import React from "react";
import Link from "next/link";


const Hero = () => {
  return (
    <div className="h-[700px] w-full max-lg:h-[900px] max-md:h-[750px]">
      <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10">
        <div className="flex flex-col gap-y-5 max-lg:order-last col-span-2">
          <h1 className="text-6xl text-golden font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
            Your Beverage Journey Begins Here
          </h1>
          <p className="text-white text-2xl max-sm:text-xl">
            From Classics to Craft: <br/>
            Explore our diverse range of beverages, each one chosen to elevate your moments and enhance your 
            gatherings. Join us in celebrating the art of beverage craftsmanship and the joy of sharing great 
            tastes with great company. 
          </p>
          <div className="flex gap-x-1 max-lg:flex-col max-lg:gap-y-1">
            <Link href='/shop'>
              <button className="bg-golden text-primary font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
                ORDER NOW
              </button>
            </Link>
            <button className="bg-golden text-primary font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
              LEARN MORE
            </button>
          </div>
        </div>
        <Image
          src="/about-background.png"
          width={400}
          height={400}
          alt="smart watch"
          className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
