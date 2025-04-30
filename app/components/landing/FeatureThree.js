import { Lexend } from "next/font/google";
import Image from "next/image";

const lexend = Lexend({ subsets: ["latin"] });

const features = [
  {
    icon: "/landing/feature-three/icon-user.png",
    title: "Discover Communities",
    description: "Join a network of passionate traders and grow your expertise together.",
  },
  {
    icon: "/landing/feature-three/icon-message.png",
    title: "Exclusive Webinars",
    description: "Learn from the best in the industry through expert-led live, interactive webinars",
  },
  {
    icon: "/landing/feature-three/icon-waterfall.png",
    title: "Enhance Strategies",
    description: "Transform your trading performance with advanced techniques and insights.",
  },
];

export default function FeatureThree() {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-16 px-4 md:px-8 xl:px-16 py-12 max-w-[90rem] mx-auto">
      <div className="flex flex-col gap-16 max-w-[43.1875rem]">
        <h2 className={`${lexend.className} text-[2rem] sm:text-[2.5rem] xl:text-[3rem] font-medium leading-[117%] tracking-[0%]`}>
          Empowering Your Trading Journey with Expert Guidance
        </h2>

        {/* Image for tablet and mobile */}
        <div className="lg:hidden w-full flex items-center justify-center">
          <Image 
            src='/landing/feature-three/user.png'
            alt='user'
            width={431}
            height={488}
            className="w-full max-w-[26.9375rem] h-auto aspect-[431/488]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4 relative">
              <div className="w-[2.9375rem] h-[2.9375rem] relative">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              <h3 className={`${lexend.className} text-[2rem] font-medium leading-[114%] tracking-[0%] text-[#1F6BFF]`}>
                {feature.title}
              </h3>
              
              <p className={`${lexend.className} text-[1.125rem] font-light leading-[150%] tracking-[0%] max-w-[13.1875rem]`}>
                {feature.description}
              </p>

              {/* Dotted line separator - only show between items */}
              {index < features.length - 1 && (
                <div className="hidden md:block absolute right-[-1rem] top-0 h-full">
                  <div className="w-[0.125rem] h-full border-r-[0.1875rem] border-dashed border-black/40" ></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="w-[11.75rem] h-[3.375rem] border-2 border-[#000000CC] rounded-[3.125rem] px-[1.5625rem] py-[0.625rem] gap-[0.625rem] transition-all duration-0">
          Learn More
        </button>
      </div>

      {/* Image for desktop */}
      <div className="hidden lg:flex w-full lg:w-1/2 items-start justify-center lg:justify-end">
        <span className="text-gray-400">
          <Image 
            src='/landing/feature-three/user.png'
            alt='user'
            width={431}
            height={488}
            className="w-full max-w-[26.9375rem] h-auto aspect-[431/488]"
          />
        </span>
      </div>
    </div>
  );
}