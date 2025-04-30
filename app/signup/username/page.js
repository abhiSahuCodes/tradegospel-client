"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function SignupUsername() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: ""
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    if (e.target.name === 'terms') {
      setTermsAccepted(e.target.checked);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.username) {
      alert("Please enter a username");
      return;
    }

    if (!termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }

    console.log("Form submitted:", formData);
    router.push("/signup/verify");
  };

  return (
    <div className="w-full max-w-[90rem] mx-auto p-6">
      <button
        onClick={() => router.push("/")}
        className="absolute top-10 right-10 hover:opacity-80 transition-opacity cursor-pointer"
      >
        <Image src="/signup/close.png" alt="Close" width={14} height={14} />
      </button>
      <div className="w-full max-w-[26.25rem] mx-auto flex flex-col items-center px-4 sm:px-0">
        <div className="flex flex-col gap-10 items-center w-full">
          <Image
            src="/signup/tg-full-logo.png"
            alt="TradeGospel Logo"
            width={238}
            height={34}
            className="mb-[0.6375rem] max-w-full h-auto"
          />

          <h1
            className={`${openSans.className} text-xl sm:text-2xl font-semibold leading-[100%] tracking-[0%] mb-[2rem] text-center`}
          >
            Great! you’re almost there!
          </h1>
        </div>

        <div className="w-full sm:w-[19.875rem] flex gap-[0.625rem] mb-12 mt-[1.8125rem]">
          <div className="flex-1 h-1 rounded-full bg-blue-500"></div>
          <div className="flex-1 h-1 rounded-full bg-blue-500"></div>
          <div className="flex-1 h-1 rounded-full bg-gray-200"></div>
          <div className="flex-1 h-1 rounded-full bg-gray-200"></div>
          <div className="flex-1 h-1 rounded-full bg-gray-200"></div>
        </div>

        <p
          className={`${openSans.className} text-center font-normal text-[0.875rem] sm:text-[1rem] leading-[1.25rem] sm:leading-[1.375rem] tracking-[1.5%] mb-[1.5rem] sm:mb-[2.25rem] px-4 sm:px-0`}
        >
          To successfully register with TradeGospel, you just need to take one
          more step.
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-[2.25rem]">
          <div className="space-y-[2.25rem]">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className={`${openSans.className} text-sm font-bold text-black`}
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleInputChange}
                className={`${openSans.className} w-full h-[2.5rem] px-4 py-3 border border-[#B4B4B4] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
              <p
                className={`${openSans.className} text-xs font-normal leading-[1.09375rem] tracking-[1%] text-[#00000080] px-2 py-1 rounded`}
              >
                Your username will be publicly visible to other OpenTrade users.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="marketing"
                  name="marketing"
                  className="w-3 h-3 border border-gray-300 rounded-[1.26px] mt-[3px]"
                />
                <label
                  htmlFor="marketing"
                  className={`${openSans.className} text-xs font-normal leading-[1.09375rem] tracking-[1%]`}
                >
                  Receive marketing emails with special offers
                </label>
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="w-3 h-3 border border-gray-300 rounded-[1.26px] mt-[3px]"
                  onChange={handleCheckboxChange}
                  checked={termsAccepted}
                />
                <label
                  htmlFor="terms"
                  className={`${openSans.className} text-xs font-normal leading-[1.09375rem] tracking-[1%]`}
                >
                  I have read and agreed with the{" "}
                  <span className="text-blue-600 cursor-pointer">Terms of Use</span>{" "}
                  and{" "}
                  <span className="text-blue-600 cursor-pointer">Privacy Policy</span>
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={!termsAccepted}
            className={`${openSans.className} w-full h-[2.5625rem] py-[0.656rem] px-[0.625rem] ${termsAccepted ? 'bg-[#1F6BFF] hover:bg-[#1f39ff]' : 'bg-[#84868b] cursor-not-allowed'} text-white rounded-lg transition-colors font-semibold text-[0.875rem] cursor-pointer leading-[1.25rem] tracking-[1.25%]`}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
