import { Open_Sans } from "next/font/google";
import Image from "next/image";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto min-h-[348px] bg-gray-400 text-white pt-[50px] pr-[50px] pb-[25px] pl-[50px] flex flex-col gap-[75px] xl:mt-24">
      {/* Section One */}
      <div className="max-w-[1340px] xl:h-[163px] mx-auto w-full flex flex-col xl:flex-row justify-between items-center xl:items-start gap-8 xl:gap-0">
        {/* Logo Section */}
        <div className="w-[244.21px]">
          <Image
            src="/landing/footer/tg-full-logo.png"
            alt="TradeGospel Logo"
            width={244.21}
            height={35}
            className="mb-4"
          />
        </div>

        {/* Navigation Links Section */}
        <div className="flex xl:flex-row gap-8 mx-auto">
          <div className="flex xl:flex-row gap-8">
            {/* Headings Section */}
            <div className="flex xl:hidden flex-col gap-8 text-center">
              <h3 className={`${openSans.className} font-semibold text-[0.9rem]`}>About Us</h3>
              <h3 className={`${openSans.className} font-semibold text-[0.9rem]`}>Support</h3>
              <h3 className={`${openSans.className} font-semibold text-[0.9rem]`}>Updates</h3>
            </div>

            {/* Content Section */}
            <div className="flex gap-8">
              {/* About Us Section */}
              <div>
                <h3 className={`${openSans.className} font-semibold mb-6 hidden xl:block`}>About Us</h3>
                <ul className="space-y-8 text-center xl:text-left">
                  <li><a href="#" className="hover:text-gray-300 text-[0.8rem] xl:text-[1rem]">Home</a></li>
                  <li><a href="#" className="hover:text-gray-300 text-[0.8rem] xl:text-[1rem]">Contact Us</a></li>
                  <li><a href="#" className="hover:text-gray-300 text-[0.8rem] xl:text-[1rem]">FAQs</a></li>
                </ul>
              </div>

              {/* Support Section */}
              <div>
                <h3 className={`${openSans.className} font-semibold mb-6 hidden xl:block`}>Support</h3>
                <ul className="space-y-8 text-center xl:text-left">
                  <li><a href="#" className="hover:text-gray-300 text-[0.8rem] xl:text-[1rem]">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-gray-300 text-[0.8rem] xl:text-[1rem]">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-gray-300 text-[0.8rem] xl:text-[1rem]">Cookie Policy</a></li>
                </ul>
              </div>

              {/* Updates Section */}
              <div>
                <h3 className={`${openSans.className} font-semibold mb-6 hidden xl:block`}>Updates</h3>
                <ul className="space-y-8 text-center xl:text-left">
                  <li><a href="#" className="hover:text-gray-300 text-[0.8rem] xl:text-[1rem]">Terms and Conditions</a></li>
                  <li><a href="#" className="hover:text-gray-300 text-[0.8rem] xl:text-[1rem]">Privacy Statement</a></li>
                  <li><a href="#" className="hover:text-gray-300 text-[0.8rem] xl:text-[1rem]">Cookie Settings</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="w-full xl:w-[450px] h-auto xl:h-[163px] flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className={`${openSans.className} font-semibold`}>Still have questions?</h3>
          <p className={`${openSans.className} text-white`}>
            Feel free to reach out, and our dedicated support team will be happy to assist you on your financial journey.
          </p>
          <button className="w-[140px] h-[42px] border-2 border-white text-white rounded-full hover:bg-gray-200 transition-colors duration-300 mx-auto xl:mx-0">
            Contact Us
          </button>
        </div>
      </div>

      {/* Section Two */}
      <div className="border-t-2 border-white mt-auto">
        <div className="max-w-[1340px] mx-auto py-2 flex flex-col xl:flex-row flex-start items-center gap-4">
          <p className={`${openSans.className} text-[1.125rem] font-normal`}>
            ©2024 TradeGospel. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#" className={`${openSans.className} text-base underline hover:text-gray-300 text-[1rem]`}>
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className={`${openSans.className} text-base underline hover:text-gray-300 text-[1rem]`}>
              Terms of Service
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className={`${openSans.className} text-base underline hover:text-gray-300 text-[1rem]`}>
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}