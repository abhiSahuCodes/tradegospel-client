import { Lexend, Open_Sans } from "next/font/google";
import Image from "next/image";

const lexend = Lexend({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

// Sample data structure for webinars
const recommendedWebinars = [
  {
    id: 1,
    type: "paid",
    image: "/landing/feature-two/RW-1.png",
    title: "Investing Live: Opportunities and Risks",
    creator: {
      name: "Mark Thomas",
      avatar: "/landing/feature-two/dp.png",
      verified: "/landing/feature-two/verified.png",
    },
    watching: "1.2K",
  },
  {
    id: 2,
    type: "paid",
    image: "/landing/feature-two/RW-2.png",
    title: "Investing Live: Opportunities and Risks",
    creator: {
      name: "Mark Thomas",
      avatar: "/landing/feature-two/dp.png",
      verified: "/landing/feature-two/verified.png",
    },
    watching: "1.2K",
  },
  {
    id: 3,
    type: "paid",
    image: "/landing/feature-two/RW-3.png",
    title: "Investing Live: Opportunities and Risks",
    creator: {
      name: "Mark Thomas",
      avatar: "/landing/feature-two/dp.png",
      verified: "/landing/feature-two/verified.png",
    },
    watching: "1.2K",
  },
  {
    id: 4,
    type: "paid",
    image: "/landing/feature-two/RW-4.png",
    title: "Investing Live: Opportunities and Risks",
    creator: {
      name: "Mark Thomas",
      avatar: "/landing/feature-two/dp.png",
      verified: "/landing/feature-two/verified.png",
    },
    watching: "1.2K",
  },
  
];

const upcomingStreams = [
  {
    id: 5,
    type: "live",
    image: "/landing/feature-two/RW-1.png",
    title: "Investing Live: Opportunities and Risks",
    creator: {
      name: "Mark Thomas",
      avatar: "/landing/feature-two/dp.png",
      verified: "/landing/feature-two/verified.png",
    },
    notifyButton: true,
  },
  {
    id: 6,
    type: "live",
    image: "/landing/feature-two/RW-5.png",
    title: "Investing Live: Opportunities and Risks",
    creator: {
      name: "Mark Thomas",
      avatar: "/landing/feature-two/dp.png",
      verified: "/landing/feature-two/verified.png",
    },
    notifyButton: true,
  },{
    id: 7,
    type: "live",
    image: "/landing/feature-two/RW-3.png",
    title: "Investing Live: Opportunities and Risks",
    creator: {
      name: "Mark Thomas",
      avatar: "/landing/feature-two/dp.png",
      verified: "/landing/feature-two/verified.png",
    },
    notifyButton: true,
  },{
    id: 8,
    type: "live",
    image: "/landing/feature-two/RW-4.png",
    title: "Investing Live: Opportunities and Risks",
    creator: {
      name: "Mark Thomas",
      avatar: "/landing/feature-two/dp.png",
      verified: "/landing/feature-two/verified.png",
    },
    notifyButton: true,
  },
];

export default function FeatureTwo() {
  return (
    <div className="flex flex-col items-center gap-16 px-4 md:px-8 xl:px-16 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full max-w-[80rem] mx-auto">
        <h2
          className={`${lexend.className} text-[2rem] sm:text-[2.5rem] xl:text-[3rem] font-medium leading-[117%] text-center lg:text-left text-black`}
        >
          Real-Time Insights, Real-World Gains
        </h2>

        <button className="w-[11.75rem] h-[3.375rem] rounded-[3.125rem] border-2 border-[#000000CC] px-[1.563rem] py-[0.625rem] gap-[0.625rem] transition-all duration-0 mx-auto lg:mx-0">
          Learn More
        </button>
      </div>

      {/* Laptop Screen Container */}
      <div className="w-full max-w-[80rem] aspect-[16/10] relative sm:h-auto h-[40rem]">
        {/* Laptop Frame */}
        <div className="absolute inset-0 bg-black rounded-t-[1rem] rounded-b-[0.2rem] p-[1.4rem] pb-[4rem]">
          {/* Inner Frame */}
          <div className="w-full h-full bg-black rounded-[1rem] p-[0.25rem]">
            {/* Screen Content Area */}
            <div className="w-full h-full bg-white rounded-[0.75rem] p-[1rem] overflow-y-auto">
              {/* Webinar Sections */}
              <div className="space-y-8">
                {/* Recommended Section */}
                <div className="space-y-4">
                  <h3
                    className={`${openSans.className} text-[1.125rem] font-bold leading-[1.5625rem] tracking-[0.02em]`}
                  >
                    Recommended Webinar for you
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {recommendedWebinars.map((webinar) => (
                      <div
                        key={webinar.id}
                        className="w-full max-w-[15.625rem] h-auto mx-auto"
                      >
                        {/* Card Image */}
                        <div className="relative w-full aspect-[5/3]">
                          <Image
                            src={webinar.image}
                            alt={webinar.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Card Content */}
                        <div className="w-full mt-2 space-y-2">
                          <h4
                            className={`${openSans.className} text-[0.875rem] sm:text-[1rem] font-semibold leading-[1.375rem] tracking-[0.015em]`}
                          >
                            {webinar.title}
                          </h4>

                          {/* Creator Info */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Image
                                src={webinar.creator.avatar}
                                alt={webinar.creator.name}
                                width={22.5}
                                height={22.5}
                                className="rounded-[0.703125rem] w-[18px] sm:w-[22.5px]"
                              />
                              <button
                                className={`${openSans.className} text-[0.75rem] sm:text-[0.875rem] font-semibold leading-[1.25rem] tracking-[0.0125em]`}
                              >
                                {webinar.creator.name}
                              </button>
                              <Image
                                src={webinar.creator.verified}
                                alt="Verified"
                                width={18}
                                height={16}
                                className="w-[14px] sm:w-[18px]"
                              />
                            </div>
                            <span className="text-xs sm:text-sm text-gray-500">
                              {webinar.watching} Watching
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Section */}
                <div className="space-y-4 w-full">
                  <h3
                    className={`${openSans.className} text-[1.125rem] font-bold leading-[1.5625rem] tracking-[0.02em]`}
                  >
                    Upcoming Live Streams
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {upcomingStreams.map((stream) => (
                      <div
                        key={stream.id}
                        className="w-full max-w-[15.625rem] h-auto mx-auto"
                      >
                        {/* Card Image */}
                        <div className="relative w-full aspect-[5/3]">
                          <Image
                            src={stream.image}
                            alt={stream.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Card Content */}
                        <div className="w-full mt-2 space-y-2">
                          <div className="relative">
                            <h4
                              className={`${openSans.className} text-[0.875rem] sm:text-[1rem] font-semibold leading-[1.375rem] tracking-[0.015em]`}
                            >
                              {stream.title}
                            </h4>
                            <button className="absolute top-0 right-0 w-[3rem] sm:w-[4rem] h-[1.5rem] sm:h-[1.75rem] rounded-[0.8125rem] bg-blue-600 text-white text-xs sm:text-sm px-2 sm:px-4">
                              Buy
                            </button>
                          </div>

                          {/* Creator Info */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Image
                                src={stream.creator.avatar}
                                alt={stream.creator.name}
                                width={22.5}
                                height={22.5}
                                className="rounded-[0.703125rem] w-[18px] sm:w-[22.5px]"
                              />
                              <button
                                className={`${openSans.className} text-[0.75rem] sm:text-[0.875rem] font-semibold leading-[1.25rem] tracking-[0.0125em]`}
                              >
                                {stream.creator.name}
                              </button>
                              <Image
                                src={stream.creator.verified}
                                alt="Verified"
                                width={18}
                                height={16}
                                className="w-[14px] sm:w-[18px]"
                              />
                            </div>
                          </div>

                          {/* Notify Button */}
                          <button className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600  bg-[#d9d9d9] py-1 px-1">
                            <Image
                              src='/landing/feature-two/icon-bell_ringing.png'
                              alt='bell_ringing'
                              width={14}
                              height={14}
                              className="w-[14px] sm:w-[16px]"
                            />
                            <span className={`${openSans.className} pr-1`}>NOTIFY ME</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
