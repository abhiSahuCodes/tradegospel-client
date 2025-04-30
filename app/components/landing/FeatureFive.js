import { Lexend, Open_Sans } from "next/font/google";
import Image from "next/image";

const lexend = Lexend({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export default function FeatureFive() {
  return (
    <div className="flex flex-col items-center gap-16 px-4 md:px-8 xl:px-16 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full max-w-[80rem] mx-auto">
        <h2
          className={`${lexend.className} text-[2rem] sm:text-[2.5rem] xl:text-[3rem] font-medium leading-[117%] tracking-[0%] xl:w-[32.125rem] h-[7rem] mt-[0.9375rem] lg:text-left text-center`}
        >
          Your Gateway to Informed Trading
        </h2>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[80rem] grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        {/* Left Card */}
        <div className="bg-white rounded-[0.57rem] p-[2rem] pb-[1.5025rem] w-full xl:w-[23.44390625rem] lg:w-[20rem] h-auto xl:h-[30rem] lg:h-[32rem] shadow-lg space-y-[2.003125rem] relative lg:top-24 mx-auto">
          <h3
            className={`${openSans.className} text-[0.90125rem] text-center font-bold leading-[1.251875rem] tracking-[0.02em]`}
          >
            Create your Community
          </h3>
          <p
            className={`${openSans.className} text-[0.80125rem] font-normal leading-[1.101875rem] tracking-[0.015em] text-center`}
          >
            Where users connect, share ideas, and collaborate on their passions
            and interests.
          </p>

          <div className="space-y-4">
            <button className="xl:w-[19.4375rem] w-full h-[3.52884375rem] flex items-center justify-between px-[1.6025rem] py-[1.201875rem] border-[0.05rem] rounded-[0.400625rem] hover:bg-gray-50 transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-4">
                <Image
                  src="/landing/feature-five/add.png"
                  alt="New Space"
                  width={11.22}
                  height={11.22}
                />
                <span>New Space</span>
              </div>
              <span>
                <Image
                  src="/landing/feature-five/arrow.png"
                  alt="Arrow"
                  width={7.5}
                  height={7.5}
                />
              </span>
            </button>

            <span
              className={`${openSans.className} text-[0.60125rem] font-semibold leading-[100%] tracking-[0.01em] block`}
            >
              Use Template
            </span>

            <button className="xl:w-[19.4375rem] w-full h-[3.52884375rem] flex items-center justify-between px-[1.6025rem] py-[1.201875rem] border-[0.05rem] rounded-[0.400625rem] hover:bg-gray-50 transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-4">
                <Image
                  src="/landing/feature-five/stocks.png"
                  alt="Stocks"
                  width={11.22}
                  height={11.22}
                />
                <span>Stocks</span>
              </div>
              <span>
                <Image
                  src="/landing/feature-five/arrow.png"
                  alt="Arrow"
                  width={7.5}
                  height={7.5}
                />
              </span>
            </button>

            <button className="xl:w-[19.4375rem] w-full h-[3.52884375rem] flex items-center justify-between px-[1.6025rem] py-[1.201875rem] border-[0.05rem] rounded-[0.400625rem] hover:bg-gray-50 transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-4">
                <Image
                  src="/landing/feature-five/crypto.png"
                  alt="Crypto"
                  width={11.22}
                  height={11.22}
                />
                <span>Crypto</span>
              </div>
              <span>
                <Image
                  src="/landing/feature-five/arrow.png"
                  alt="Arrow"
                  width={7.5}
                  height={7.5}
                />
              </span>
            </button>

            <button className="xl:w-[19.4375rem] w-full h-[3.52884375rem] flex items-center justify-between px-[1.6025rem] py-[1.201875rem] border-[0.05rem] rounded-[0.400625rem] hover:bg-gray-50 transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-4">
                <Image
                  src="/landing/feature-five/add.png"
                  alt="Indices"
                  width={11.22}
                  height={11.22}
                />
                <span>Indices</span>
              </div>
              <span>
                <Image
                  src="/landing/feature-five/arrow.png"
                  alt="Arrow"
                  width={7.5}
                  height={7.5}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Middle Section - Two Cards Stack */}
        <div className="space-y-[1.945rem] w-full mx-auto">
          {/* Top Card */}
          <div className="bg-white rounded-[0.75rem] p-[1.945rem] pb-[1.45875rem] w-full xl:w-[24.3125rem] lg:w-[21rem] shadow-lg">
            <h3
              className={`${lexend.className} text-[0.875rem] font-medium leading-[117%] text-center mb-4`}
            >
              Tell us more about your Communitie
            </h3>
            <p className="text-[0.778rem] text-center text-gray-700 mb-8">
              In order to help your setup, is your new server for just a few
              friends or a large community?
            </p>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-between border rounded-[0.400625rem] hover:bg-gray-50 group p-3">
                <div className="flex items-center gap-4">
                  <Image
                    src="/landing/feature-five/users.png"
                    alt="Community"
                    width={22}
                    height={20}
                  />
                  <span className="text-[0.778rem] font-bold">
                    For a club or a Trader Community
                  </span>
                </div>
                <span>
                  <Image
                    src="/landing/feature-five/arrow.png"
                    alt="Arrow"
                    width={7.5}
                    height={7.5}
                  />
                </span>
              </button>
              <button className="w-full flex items-center justify-between border rounded-[0.400625rem] hover:bg-gray-50 group p-3">
                <div className="flex items-center gap-4">
                  <Image
                    src="/landing/feature-five/users-check.png"
                    alt="Personal"
                    width={22}
                    height={20}
                  />
                  <span className="text-[0.778rem] font-bold">
                    For personal Traders Friends
                  </span>
                </div>
                <span className="text-xl">
                  <Image
                    src="/landing/feature-five/arrow.png"
                    alt="Arrow"
                    width={7.5}
                    height={7.5}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="bg-white rounded-[1.07rem] w-full xl:w-[24.5049667359375rem] lg:w-[21rem] pb-4 shadow-lg">
            <div className="relative w-full aspect-video">
              <Image
                src="/landing/feature-five/card-image.png"
                alt="Live Trading"
                fill
                className="object-contain rounded-lg"
              />
              {/* <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-sm">
                LIVE
              </span> */}
            </div>
            <div>
              <div className="flex justify-between items-center w-full px-4">
                <div className="flex items-center gap-2 text-[#606060]">
                    <p className={`${openSans.className} text-[0.89625rem] font-normal leading-[1.3075rem] tracking-[0.01em]`}>Mar 1, 2024</p>
                    <Image src='/landing/feature-five/hexagon.png' alt="hexagon" width={6} height={6} className="mx-2" />
                    <p className={`${openSans.className} text-[0.89625rem] font-normal leading-[1.3075rem] tracking-[0.01em]`}>12:00 PM</p>
                </div>
                <div className="flex items-center gap-4 text-[#606060] ">
                    <Image src='/landing/feature-five/bell.png' alt="bell" width={22} height={22} className="cursor-pointer" />
                    <Image src='/landing/feature-five/share.png' alt="share" width={18} height={20} className="cursor-pointer" />
                </div>
              </div>
              <h4 className="font-bold text-[1.1rem] px-4 pt-2">
                Learning Technical Analysis
              </h4>
              <div className="flex items-center gap-2 text-[0.9rem] px-4 text-[#606060]">
                <span>Trade Genius</span>
                <Image
                  src="/landing/feature-five/verified.png"
                  alt="Verified"
                  width={16}
                  height={16}
                />
              </div>
              {/* {Indices, Stocks, Crypto} */}
              <div className="flex gap-[0.41875rem] px-4 pt-2">
                <div className="w-[4.05015625rem] h-[1.565625rem] border-[0.041875rem] rounded-[0.628125rem] px-[0.8375rem] ">
                  <span className={`${openSans.className} text-[0.66875rem] font-semibold leading-[100%] tracking-[0.01em] text-[#606060]`}>
                    Indices
                  </span>
                </div>
                <div className="w-[4.05015625rem] h-[1.565625rem] border-[0.041875rem] rounded-[0.628125rem] px-[0.8375rem]">
                  <span className={`${openSans.className} text-[0.66875rem] font-semibold leading-[100%] tracking-[0.01em] text-[#606060]`}>
                    Stocks
                  </span>
                </div>
                <div className="w-[4.05015625rem] h-[1.565625rem] border-[0.041875rem] rounded-[0.628125rem] px-[0.8375rem]">
                  <span className={`${openSans.className} text-[0.66875rem] font-semibold leading-[100%] tracking-[0.01em] text-[#606060]`}>
                    Crypto
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center w-full px-4 pt-4">
                <div className="flex items-center gap-2">
                    <Image
                    src='/landing/feature-five/users.png'
                    alt='users'
                    width={17}
                    height={15}
                    />
                    <span className={`${openSans.className} text-[0.896rem] text-medium text-[#0000004D]`}>18, 76, 788 attending</span>
                </div>
                <button className="w-[8.933125rem] h-[1.764375rem] border-[0.02125rem] border-[#00000080] rounded-[0.33875rem] text-[0.5925rem] font-semibold">
                    Register
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Cards Stack */}
        <div className="space-y-6 w-full mx-auto">
          <div className="bg-white rounded-[1rem] shadow-lg w-full xl:w-[322px] lg:w-[280px] h-auto xl:h-[310px] lg:h-[290px]">
            <div className="relative w-full aspect-video mb-4">
              <Image
                src="/landing/feature-five/live-trading.png"
                alt="Live Trading"
                fill
                className="object-cover rounded-lg"
              />
              {/* <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-sm">LIVE</span> */}
            </div>
            <div className="px-2">
              <h4 className="font-bold text-[1.288rem] mb-2 pr-3">
                Investing Live: Opportunities and Risks
              </h4>
              <div className="flex items-center gap-2">
                <Image
                  src="/landing/feature-five/dp.png"
                  alt="Mark Thomas"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>Mark Thomas</span>
                <Image
                  src="/landing/feature-five/verified.png"
                  alt="Verified"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[1rem] p-6 shadow-lg sm:w-full xl:w-[400px] lg:w-[280px]">
            <h3 className="text-[1.355rem] lg:text-[1.2rem] font-bold mb-4">
              Welcome to Tradegospel Communities
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Image
                  src="/landing/feature-five/magic.png"
                  alt="Community"
                  width={24}
                  height={24}
                />
                <div>
                  <h4 className={`${openSans.className} text-[0.969375rem] font-bold leading-[1.211875rem] tracking-[0.0125em]`}>
                    Meet others with your interests
                  </h4>
                  <p className={`${openSans.className} text-[0.726875rem] font-semibold leading-[0.969375rem] tracking-[0.0125em] text-[#515151]`}>
                    Talk to people who care about the same <br/> things you do.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  src="/landing/feature-five/users.png"
                  alt="Chat"
                  width={24}
                  height={24}
                />
                <div>
                  <h4 className={`${openSans.className} text-[0.969375rem] font-bold leading-[1.211875rem] tracking-[0.0125em]`}>Chat directly to a community</h4>
                  <p className={`${openSans.className} text-[0.726875rem] font-semibold leading-[0.969375rem] tracking-[0.0125em] text-[#515151]`}>
                    Your Chat are Shared with other <br /> Community members - not your follower
                  </p>
                </div>
              </div>
            </div>
            <p className={`${openSans.className} text-[0.550625rem] font-bold leading-[0.846875rem] tracking-[0.0125em] text-center mt-10`}>Select what type of community you want to join</p>
            <div className="flex justify-between items-center mt-4 px-4">
                <button className="w-[8.933125rem] h-[1.764375rem] border-[0.02125rem] border-[#00000080] rounded-[0.33875rem] text-[0.5925rem] font-semibold">
                    Public
                </button>
                <button className="w-[8.933125rem] h-[1.764375rem] border-[0.02125rem] border-[#00000080] rounded-[0.33875rem] text-[0.5925rem] font-semibold">
                    Premium
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
