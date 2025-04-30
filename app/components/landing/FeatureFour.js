import { Lexend } from "next/font/google";
import Image from "next/image";

const lexend = Lexend({ subsets: ["latin"] });

export default function FeatureFour() {
  return (
    <div className="flex flex-col items-center gap-16 px-4 md:px-8 xl:px-16 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full max-w-[80rem] mx-auto">
        <h2
          className={`${lexend.className} text-[2rem] sm:text-[2.5rem] xl:text-[3rem] font-medium leading-[117%] text-center lg:text-left text-black`}
        >
          Master the Markets with Real-Time Learning
        </h2>

        <button className="w-[11.75rem] h-[3.375rem] rounded-[3.125rem] border-2 border-[#000000CC] px-[1.563rem] py-[0.625rem] gap-[0.625rem] transition-all duration-0 mx-auto lg:mx-0">
          Learn More
        </button>
      </div>

      {/* Laptop Screen Container */}
      <div className="w-full max-w-[80rem] aspect-[16/9] relative">
        {/* Laptop Frame */}
        <div className="absolute inset-0 bg-black rounded-t-[1rem] rounded-b-[0.2rem] p-[1.4rem] pb-[3.5rem]">
          {/* Inner Frame */}
          <div className="w-full h-full bg-black rounded-[0.75rem] p-[0.25rem]">
            {/* Screen Content Area */}
            <div className="w-full h-full bg-white rounded-[0.75rem] overflow-hidden relative">
              <div className="absolute inset-[0.5rem]">
                <Image
                  src="/landing/feature-four/screen-image.png"
                  alt="Feature Four Screen"
                  fill
                  className="object-fit scale-102"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}