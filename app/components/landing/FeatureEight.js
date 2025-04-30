import { Inter, Open_Sans } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export default function FeatureEight() {
  return (
    <div className="flex flex-col items-center py-8 xl:py-12">
      <div className="w-[80%] xl:w-full max-w-[79.8125rem] min-h-[10.25rem] mx-auto px-4 border-2 border-[#000000] rounded-[1rem] flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 py-6 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-4 lg:gap-8">
          <Image
            src="/landing/feature-eight/logo.png"
            alt="Logo"
            width={70}
            height={70}
            className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] xl:w-[70px] xl:h-[70px]"
          />
          <div>
            <h2 className={`${inter.className} text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem] font-bold leading-[100%] tracking-[0%] w-full lg:w-[30rem] xl:w-[41.1875rem]`}>
              Join Tradegospel Community
            </h2>
            <p className={`${openSans.className} text-[0.875rem] lg:text-[1rem] xl:text-[1.125rem] font-normal leading-[120%] lg:leading-[100%] tracking-[0%] w-full lg:w-[28rem] xl:w-[37.5rem] mt-2 text-[#606060]`}>
              Get your questions answered quickly. Browse through our FAQs for instant support on common topics of inquiry.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
          <div className="flex items-center">
            <div className="relative w-[2.2rem] lg:w-[2.8rem] xl:w-[3.363635030549641rem] h-[2.2rem] lg:h-[2.8rem] xl:h-[3.363635030549641rem] rounded-full border-4 border-black -mr-2">
              <Image
                src="/landing/feature-eight/dp-user.jpg"
                alt="User"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="relative w-[2.2rem] lg:w-[2.8rem] xl:w-[3.363635030549641rem] h-[2.2rem] lg:h-[2.8rem] xl:h-[3.363635030549641rem] rounded-full border-4 border-black -mr-2">
              <Image
                src="/landing/feature-eight/dp-user.jpg"
                alt="User"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="relative w-[2.2rem] lg:w-[2.8rem] xl:w-[3.363635030549641rem] h-[2.2rem] lg:h-[2.8rem] xl:h-[3.363635030549641rem] rounded-full border-4 border-black -mr-2">
              <Image
                src="/landing/feature-eight/dp-user.jpg"
                alt="User"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="w-[2.2rem] lg:w-[2.8rem] xl:w-[3.363635030549641rem] h-[2.2rem] lg:h-[2.8rem] xl:h-[3.363635030549641rem] rounded-full bg-white border-4 border-black flex items-center justify-center">
              <span className="text-xs lg:text-sm font-semibold">+10k</span>
            </div>
          </div>

          <button className={`${openSans.className} w-full lg:w-[9rem] xl:w-[11.125rem] h-[2.2rem] lg:h-[2.5rem] xl:h-[3rem] rounded-[1.5rem] px-3 lg:px-4 xl:px-[1.5625rem] py-1.5 lg:py-2 xl:py-[0.625rem] bg-[#1F6BFF] text-white text-xs lg:text-sm xl:text-base font-semibold leading-[100%] tracking-[0.02em] hover:bg-[#1555d4] transition-colors duration-300`}>
            Join Community
          </button>
        </div>
      </div>
    </div>
  );
}