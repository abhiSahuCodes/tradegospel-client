"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function SignupVerify() {
  const router = useRouter();

  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    
    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split('');
      setOtp(digits);
    }
  };

  const handleOtpChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.querySelector(`input[name=otp-${index + 1}]`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate OTP
    if (otp.some(digit => !digit)) {
      alert("Please enter complete OTP");
      return;
    }

    console.log("OTP submitted:", otp.join(''));
    router.push("/signup/username");
  };

  return (
    <div className="w-full max-w-[90rem] mx-auto p-6">
      <button
        onClick={() => router.push('/signup/details')}
        className="absolute top-10 left-10 hover:opacity-80 transition-opacity cursor-pointer"
      >
        <Image
          src="/signup/back.png"
          alt="Close"
          width={8}
          height={16}
        />
      </button>
      <button
        onClick={() => router.push('/')}
        className="absolute top-10 right-10 hover:opacity-80 transition-opacity cursor-pointer"
      >
        <Image
          src="/signup/close.png"
          alt="Close"
          width={14}
          height={14}
        />
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
          
          <h1 className={`${openSans.className} text-xl sm:text-2xl font-semibold leading-[100%] tracking-[0%] mb-[2rem] text-center`}>
            Verify your email
          </h1>
        </div>
        
        <div className="w-full sm:w-[19.875rem] flex gap-[0.625rem] mb-12 mt-[1.8125rem]">
          <div className="flex-1 h-1 rounded-full bg-blue-500"></div>
          <div className="flex-1 h-1 rounded-full bg-blue-500"></div>
          <div className="flex-1 h-1 rounded-full bg-gray-200"></div>
          <div className="flex-1 h-1 rounded-full bg-gray-200"></div>
          <div className="flex-1 h-1 rounded-full bg-gray-200"></div>
        </div>

        <p className={`${openSans.className} text-center font-normal text-[0.875rem] sm:text-[1rem] leading-[1.25rem] sm:leading-[1.375rem] tracking-[1.5%] mb-[1.5rem] sm:mb-[2.25rem] px-4 sm:px-0`}>
          We&apos;ve sent a one-time password (OTP) to your registered email address. Please check your inbox, including your spam folder, for an email from us containing the OTP.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full space-y-[2.25rem]">
          <div className="space-y-[2.25rem]">
            <div className="flex justify-center gap-2 sm:gap-3 w-full sm:w-[26.25rem] h-[2.75rem] sm:h-[3.75rem] px-4 sm:px-0">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  name={`otp-${index}`}
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className={`${openSans.className} w-[2.75rem] sm:w-[3.75rem] h-[2.75rem] sm:h-[3.75rem] text-center text-lg sm:text-xl border border-[#00000080] rounded-lg pt-[0.5rem] sm:pt-[0.8125rem] pr-[0.5rem] sm:pr-[0.625rem] pb-[0.5rem] sm:pb-[0.8125rem] pl-[0.5rem] sm:pl-[0.625rem] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              ))}
            </div>
          </div>
          <button
            type="submit"
            className={`${openSans.className} w-full h-[2.5625rem] py-[0.656rem] px-[0.625rem] bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-[0.875rem] leading-[1.25rem] tracking-[1.25%]`}
          >
            Verify
          </button>
        </form>
      </div>
      <div className="w-full sm:w-[39.375rem] h-auto sm:h-[2.9375rem] mx-auto flex items-center justify-center gap-[1.5625rem] text-center text-gray-600 border-t border-[#0000004D] mt-[10.375rem] px-4 sm:px-0 py-4 sm:py-0">
        <div className={`${openSans.className} text-[0.875rem] sm:text-[1rem] font-normal leading-[1.375rem] tracking-[1.5%]`}>
          Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign In</a>
        </div>
      </div>
    </div>
  );
}
