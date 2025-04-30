import { Open_Sans } from "next/font/google";
import Image from "next/image";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function FeatureSix() {
  return (
    <div className="flex flex-col items-center py-12">
      <div className="w-full max-w-[80rem] mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-6">
          <div className="w-full lg:max-w-[51.875rem]">
            <h2
              className={`${openSans.className} text-[1.5rem] lg:text-[1.875rem] font-bold leading-[120%] lg:leading-[100%] tracking-[0%] mb-4 text-left w-full lg:w-[28.75rem] h-auto lg:h-[2.5625rem] mt-[0.0625rem]`}
            >
              Discover Our Upcoming Events
            </h2>
            <p
              className={`${openSans.className} text-[1rem] lg:text-[1.125rem] font-normal leading-[130%] lg:leading-[100%] tracking-[0%] text-[#606060] text-left w-full lg:w-[57.9375rem] h-auto lg:h-[3.125rem] mt-[1rem] lg:mt-[2.625rem]`}
            >
              Don't miss out on the latest market trends and trading
              opportunities. Subscribe to Trade Gospel today and become a part
              of the revolution in trading education.
            </p>
          </div>
          <button className="w-[8rem] sm:w-full lg:w-[11.75rem] h-[2.5rem] sm:h-[3.375rem] border-2 rounded-[3.125rem] px-4 sm:px-[1.5625rem] py-2 sm:py-[0.625rem] mt-4 lg:mt-[0.9375rem] hover:bg-gray-50 transition-all duration-300 ease-in-out order-last lg:order-none mx-auto sm:mx-0 text-[0.875rem] sm:text-base whitespace-nowrap">
            Explore Events
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <button className="flex items-center justify-between w-full h-[4.5rem] border border-[#00000080] rounded-[0.5rem] px-3 sm:px-4 py-6">
            <Image
              src="/landing/feature-six/stocks.png"
              alt="Stocks"
              width={15}
              height={21}
              className="w-auto h-auto"
            />
            <span
              className={`${openSans.className} text-[0.875rem] sm:text-[1rem] font-semibold leading-[1.375rem] tracking-[0.015em] text-[#606060] text-center`}
            >
              Stocks
            </span>
            <div className="border-2 border-[#F4F4F4CC] rounded-full p-[2px]">
              <Image
                src="/landing/feature-six/add.png"
                alt="Add"
                width={14}
                height={14}
                className="w-auto h-auto"
              />
            </div>
          </button>
          <button className="flex items-center justify-between w-full h-[4.5rem] border border-[#00000080] rounded-[0.5rem] px-3 sm:px-4 py-6">
            <Image
              src="/landing/feature-six/crypto.png"
              alt="Crypto"
              width={15}
              height={21}
              className="w-auto h-auto"
            />
            <span
              className={`${openSans.className} text-[0.875rem] sm:text-[1rem] font-semibold leading-[1.375rem] tracking-[0.015em] text-[#606060] text-center`}
            >
              Crypto
            </span>
            <div className="border-2 border-[#F4F4F4CC] rounded-full p-[2px]">
              <Image
                src="/landing/feature-six/add.png"
                alt="Add"
                width={14}
                height={14}
                className="w-auto h-auto"
              />
            </div>
          </button>
          <button className="flex items-center justify-between w-full h-[4.5rem] border border-[#00000080] rounded-[0.5rem] px-3 sm:px-4 py-6">
            <Image
              src="/landing/feature-six/forex.png"
              alt="Forex"
              width={15}
              height={21}
              className="w-auto h-auto"
            />
            <span
              className={`${openSans.className} text-[0.875rem] sm:text-[1rem] font-semibold leading-[1.375rem] tracking-[0.015em] text-[#606060] text-center`}
            >
              Forex
            </span>
            <div className="border-2 border-[#F4F4F4CC] rounded-full p-[2px]">
              <Image
                src="/landing/feature-six/add.png"
                alt="Add"
                width={14}
                height={14}
                className="w-auto h-auto"
              />
            </div>
          </button>
          <button className="flex items-center justify-between w-full h-[4.5rem] border border-[#00000080] rounded-[0.5rem] px-3 sm:px-4 py-6">
            <Image
              src="/landing/feature-six/f&o.png"
              alt="F&O"
              width={15}
              height={21}
              className="w-auto h-auto"
            />
            <span
              className={`${openSans.className} text-[0.875rem] sm:text-[1rem] font-semibold leading-[1.375rem] tracking-[0.015em] text-[#606060] text-center`}
            >
              F & O
            </span>
            <div className="border-2 border-[#F4F4F4CC] rounded-full p-[2px]">
              <Image
                src="/landing/feature-six/add.png"
                alt="Add"
                width={14}
                height={14}
                className="w-auto h-auto"
              />
            </div>
          </button>
          <button className="flex items-center justify-between w-full h-[4.5rem] border border-[#00000080] rounded-[0.5rem] px-3 sm:px-4 py-6">
            <Image
              src="/landing/feature-six/commodities.png"
              alt="Commodities"
              width={15}
              height={21}
              className="w-auto h-auto"
            />
            <span
              className={`${openSans.className} text-[0.875rem] sm:text-[1rem] font-semibold leading-[1.375rem] tracking-[0.015em] text-[#606060] text-center`}
            >
              Commodities
            </span>
            <div className="border-2 border-[#F4F4F4CC] rounded-full p-[2px]">
              <Image
                src="/landing/feature-six/add.png"
                alt="Add"
                width={14}
                height={14}
                className="w-auto h-auto"
              />
            </div>
          </button>
          <button className="flex items-center justify-between w-full h-[4.5rem] border border-[#00000080] rounded-[0.5rem] px-3 sm:px-4 py-6">
            <Image
              src="/landing/feature-six/f&o.png"
              alt="F&O"
              width={15}
              height={21}
              className="w-auto h-auto"
            />
            <span
              className={`${openSans.className} text-[0.875rem] sm:text-[1rem] font-semibold leading-[1.375rem] tracking-[0.015em] text-[#606060] text-center`}
            >
              F & O
            </span>
            <div className="border-2 border-[#F4F4F4CC] rounded-full p-[2px]">
              <Image
                src="/landing/feature-six/add.png"
                alt="Add"
                width={14}
                height={14}
                className="w-auto h-auto"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
