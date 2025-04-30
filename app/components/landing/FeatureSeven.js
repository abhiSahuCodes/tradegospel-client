import { Open_Sans } from "next/font/google";
import Image from "next/image";

const openSans = Open_Sans({ subsets: ["latin"] });

const webinars = [
  {
    date: "Mar 1, 2024",
    time: "12:00 PM",
    title: "Learning Technical Analysis",
    instructor: "Trade Genius",
    attendees: "18, 76, 788",
    tags: ["Indices", "Stocks", "Crypto"]
  },
  {
    date: "Mar 3, 2024",
    time: "2:00 PM",
    title: "Advanced Trading Strategies",
    instructor: "Trade Genius",
    attendees: "15, 45, 230",
    tags: ["Indices", "Stocks", "Crypto"]
  },
  {
    date: "Mar 5, 2024",
    time: "4:00 PM",
    title: "Market Analysis Masterclass",
    instructor: "Trade Genius",
    attendees: "12, 34, 567",
    tags: ["Indices", "Stocks", "Crypto"]
  }
];

export default function FeatureSeven() {
  return (
    <div className="flex flex-col items-center py-8 sm:py-12">
      <div className="w-full max-w-[80rem] mx-auto px-4">
        <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <h2
            className={`${openSans.className} text-[1.25rem] sm:text-[1.5rem] font-bold leading-[100%] tracking-[0%] whitespace-nowrap`}
          >
            Recommended Webinars
          </h2>
          <div className="w-full h-[1px] bg-gradient-to-r from-white via-[#999999] to-[#0A0A0A]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
          {webinars.map((webinar, index) => (
            <div key={index} className="bg-white rounded-[0.8rem] sm:rounded-[1.07rem] w-full lg:w-[19rem] xl:w-[24.5049667359375rem] pb-3 sm:pb-4 shadow-lg">
              <div className="relative w-full aspect-video">
                <Image
                  src="/landing/feature-seven/card_image.png"
                  alt="Live Trading"
                  fill
                  className="object-contain rounded-lg px-3 sm:px-4"
                />
              </div>
              <div>
                <h4 className="font-bold text-[0.95rem] sm:text-[1.1rem] px-3 sm:px-4 pt-2">
                  {webinar.title}
                </h4>
                <div className="flex items-center gap-2 text-[0.8rem] sm:text-[0.9rem] px-3 sm:px-4 text-[#606060]">
                  <span>{webinar.instructor}</span>
                  <Image
                    src="/feature-five/verified.png"
                    alt="Verified"
                    width={14}
                    height={14}
                    className="w-auto h-auto sm:w-4 sm:h-4"
                  />
                </div>
                <div className="flex flex-wrap gap-[0.3rem] sm:gap-[0.41875rem] px-3 sm:px-4 pt-2">
                  {webinar.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className="w-auto sm:w-[4.05015625rem] h-[1.3rem] sm:h-[1.565625rem] border-[0.041875rem] rounded-[0.5rem] sm:rounded-[0.628125rem] px-[0.6rem] sm:px-[0.8375rem]">
                      <span className={`${openSans.className} text-[0.6rem] sm:text-[0.66875rem] font-semibold leading-[100%] tracking-[0.01em] text-[#606060] whitespace-nowrap`}>
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center w-full px-3 sm:px-4 pt-3 sm:pt-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Image
                      src='/feature-five/users.png'
                      alt='users'
                      width={15}
                      height={13}
                      className="w-auto h-auto sm:w-[17px] sm:h-[15px]"
                    />
                    <span className={`${openSans.className} text-[0.75rem] sm:text-[0.896rem] text-medium text-[#0000004D]`}>{webinar.attendees} attending</span>
                  </div>
                  <button className={`${openSans.className} w-[5.5rem] sm:w-[6.825744140625rem] h-[1.8rem] sm:h-[2.128311157226563rem] gap-[0.5rem] sm:gap-[0.753125rem] rounded-[0.8rem] sm:rounded-[0.979375rem] py-[0.3rem] sm:py-[0.376875rem] px-[1.2rem] sm:px-[1.506875rem] bg-[#1F6BFF] text-white text-[0.8rem] sm:text-[0.90375rem] font-bold leading-[1.1rem] sm:leading-[1.318125rem] tracking-[0.01em] hover:bg-[#1555d4] transition-colors duration-300`}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}