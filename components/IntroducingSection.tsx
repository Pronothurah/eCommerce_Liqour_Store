// *********************
// Role of the component: IntroducingSection with the text "Introducing Singitronic"
// Name of the component: IntroducingSection.tsx
// Developer:  Onsongo Onditi
// Version: 1.0
// Component call: <IntroducingSection />
// Input parameters: no input parameters
// Output: Section with the text "Introducing Singitronic" and button
// *********************

import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <div className="py-20 pt-24 bg-primary">
      <div className="text-center flex flex-col gap-y-5 items-center">
        <h2 className="text-white text-6xl font-extrabold text-center mb-2 max-md:text-4xl max-[480px]:text-4xl">
      <span className="text-gray">ROH </span><span className="text-golden">& BARRELS</span>
        </h2>
        <div>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            Discover, Sip, and Savor
          </p>
          <p className="text-white text-center mb-16 text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            Explore our finest selection of spirits and wines.
          </p>
          <Link href="/shop" className="block text-black bg-golden font-bold px-12 py-3 mt-16 text-xl hover:bg-gray-100 w-96 mt-2  max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto">
            ORDER NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;
