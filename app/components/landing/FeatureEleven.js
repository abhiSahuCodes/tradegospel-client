'use client';

import { Open_Sans } from "next/font/google";
import Image from "next/image";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function FeatureEleven() {
  return (
    <div className="relative py-16 flex flex-col items-center text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay */}
        <Image
          src="/landing/feature-eleven/bg.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1260px] mx-auto px-4 flex flex-col items-center">
        <h2 className={`${openSans.className} text-[1.5rem] sm:text-[1.875rem] lg:text-[1.875rem] font-bold leading-[100%] tracking-[0%] text-center max-w-[583px]`}>
          Ready to Begin Your Financial Journey?
        </h2>

        <p className={`${openSans.className} text-[1rem] sm:text-[1.125rem] lg:text-[1.125rem] font-normal leading-[120%] sm:leading-[100%] tracking-[0%] text-center mt-4 max-w-[1260px]`}>
          Join TradeGospel today and embark on a journey towards financial success. With our comprehensive educational resources, supportive community, and cutting-edge tools, you'll have everything you need to thrive in the world of finance and trading.
        </p>

        {/* Quote Container */}
        <div className="w-full max-w-[1260px] h-auto sm:h-[225px] mt-8 rounded-[40px] p-6 sm:p-[50px] backdrop-blur-[4px] bg-white/25 flex flex-col items-center justify-center relative">
          <Image
            src="/landing/feature-eleven/quotes.png"
            alt="Quotes"
            width={40}
            height={30}
            className="mb-4 brightness-0 invert" // Make quotes icon white
          />
          
          <p className="font-['Times_New_Roman'] text-[1.5rem] sm:text-[2rem] lg:text-[2.1875rem] font-normal leading-[120%] sm:leading-[100%] tracking-[0%] text-center max-w-[649px]">
            The best time to plant a tree was 20 years ago.<br />
            The second best time is now.
          </p>
        </div>

        {/* Join Button */}
        <button className={`${openSans.className} mt-8 w-[206.67px] h-[63.89px] rounded-[36.11px] px-[43.33px] py-[14.44px] bg-[#1F6BFF] text-white hover:bg-[#1555d4] transition-colors duration-300`}>
          Join Now
        </button>
      </div>
    </div>
  );
}