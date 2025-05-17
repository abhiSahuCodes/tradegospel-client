"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function SignupDetails() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Form submitted:", formData);
    
    // Navigate to verification page
    router.push("/signup/verify");
  };

  return (
    <div className="w-full max-w-[90rem] mx-auto p-6">
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
            Sign up using email
          </h1>
        </div>
        
        <div className="w-full sm:w-[19.875rem] flex gap-[0.625rem] mb-12 mt-[1.8125rem]">
          <div className="flex-1 h-1 rounded-full bg-blue-500"></div>
          <div className="flex-1 h-1 rounded-full bg-gray-200"></div>
          <div className="flex-1 h-1 rounded-full bg-gray-200"></div>
          <div className="flex-1 h-1 rounded-full bg-gray-200"></div>
          <div className="flex-1 h-1 rounded-full bg-gray-200"></div>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full space-y-[2.25rem]">
          <div className="space-y-[2.25rem]">
          <label htmlFor="username" className={`${openSans.className} text-sm font-bold text-black`}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`${openSans.className} w-full h-[2.5rem] px-4 py-3 border border-[#B4B4B4] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />

            <div className="relative">
              <label htmlFor="password" className={`${openSans.className} text-sm font-bold text-black mb-2 block`}>Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`${openSans.className} w-full h-[2.5rem] px-4 py-3 border border-[#B4B4B4] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <Image
                    src="/signup/icon-password.png"
                    alt="Toggle password"
                    width={24}
                    height={16}
                  />
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={`${openSans.className} w-full h-[2.5625rem] py-[0.656rem] px-[0.625rem] bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-[0.875rem] leading-[1.25rem] tracking-[1.25%]`}
          >
            Sign Up
          </button>

          <div className="flex items-center justify-center space-x-2 my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="w-full h-auto sm:h-[6.0625rem] grid grid-cols-1 sm:grid-cols-2 gap-[0.9375rem]">
            <button
              type="button"
              className={`${openSans.className} w-full h-[2.5rem] flex items-center justify-center space-x-[0.625rem] border border-gray-300 rounded-lg py-[0.5625rem] hover:bg-gray-50 transition-colors font-normal text-[0.875rem] leading-[100%] tracking-[0%]`}
            >
              <Image
                src="/signup/icon-google.png"
                alt="Google"
                width={20}
                height={20}
              />
              <span>Sign Up with Google</span>
            </button>

            <button
              type="button"
              className={`${openSans.className} w-full h-[2.5rem] flex items-center justify-center space-x-[0.625rem] border border-gray-300 rounded-lg py-[0.5625rem] hover:bg-gray-50 transition-colors font-normal text-[0.875rem] leading-[100%] tracking-[0%]`}
            >
              <Image
                src="/signup/icon-apple.png"
                alt="Apple"
                width={20}
                height={20}
              />
              <span>Sign Up with Apple</span>
            </button>

            <button
              type="button"
              className={`${openSans.className} w-full h-[2.5rem] flex items-center justify-center space-x-[0.625rem] border border-gray-300 rounded-lg py-[0.5625rem] hover:bg-gray-50 transition-colors font-normal text-[0.875rem] leading-[100%] tracking-[0%]`}
            >
              <Image
                src="/signup/icon-twitter.png"
                alt="Twitter"
                width={20}
                height={20}
              />
              <span>Sign Up with X</span>
            </button>

            <button
              type="button"
              className={`${openSans.className} w-full h-[2.5rem] flex items-center justify-center space-x-[0.625rem] border border-gray-300 rounded-lg py-[0.5625rem] hover:bg-gray-50 transition-colors font-normal text-[0.875rem] leading-[100%] tracking-[0%]`}
            >
              <Image
                src="/signup/icon-fb.png"
                alt="Facebook"
                width={20}
                height={20}
              />
              <span>Sign Up with Facebook</span>
            </button>
          </div>
        </form>
      </div>
      <div className="w-full sm:w-[39.375rem] h-auto sm:h-[2.9375rem] mx-auto flex items-center justify-center gap-[1.5625rem] text-center text-gray-600 border-t border-[#0000004D] mt-14 px-4 sm:px-0 py-4 sm:py-0">
        <div className={`${openSans.className} text-[0.875rem] sm:text-[1rem] font-normal leading-[1.375rem] tracking-[1.5%]`}>
          Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign In</a>
        </div>
      </div>
    </div>
  );
}
