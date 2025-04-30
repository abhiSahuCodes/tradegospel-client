import Image from 'next/image'

export default function Hero() {
  return (
    <section className="flex flex-col xl:flex-row items-center px-4 md:px-8 xl:px-16 py-12 md:py-20 relative max-w-[80rem] mx-auto">
      {/* Left Content */}
      <div className="w-full xl:w-[550px] mb-8 xl:mb-0 xl:relative xl:z-20">
        <h1 className="text-[2rem] sm:text-[1.5rem]  md:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] font-bold mb-6 leading-tight">
          Empowering <span className="text-blue-600">Financial Journeys</span> Through Trading Education
        </h1>

        <p className="text-base sm:text-lg md:text-lg lg:width-1/2 xl:text-lg text-gray-700 mx-auto xl:mb-8">
          Welcome to TradeGospel, where we empower individuals with the knowledge and tools to succeed in their financial journeys through trading education.
        </p>
        
        {/* Hero Image for Mobile and Tablet - Between p and button */}
        <div className="block xl:hidden mb-8">
          <Image
            src="/landing/hero/hero-image.png"
            alt="Trading Platform Interface"
            width={800}
            height={600}
            className="w-full h-auto max-w-[700px] mx-auto"
            priority
          />
        </div>

        <button className="bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-blue-700 transition duration-300">
          Join Now
        </button>
      </div>

      {/* Right Content - Hero Image (Desktop Only) */}
      <div className="hidden xl:block xl:absolute xl:right-0 xl:w-[65%] xl:z-10">
        <Image
          src="/landing/hero/hero-image.png"
          alt="Trading Platform Interface"
          width={1200}
          height={900}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  )
}