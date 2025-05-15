"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileLayout({ children }) {
  const [sideMenuOpen, setSideMenuOpen] = useState(true);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <div className="flex h-screen bg-[#FFFFFF]">
      {/* Desktop Side Menu - Hidden on mobile */}
      {sideMenuOpen && (
        <div className="hidden lg:fixed lg:flex lg:left-[1px] lg:top-0 lg:w-[199px] lg:h-[778px] lg:flex-col lg:gap-[57px] lg:pt-[27px] lg:pb-[27px] lg:bg-[#FFFFFF] lg:shadow-md lg:z-50">
          {/* Logo */}
          <div className="px-4">
            <Image
              src="/signup/tg-full-logo.png"
              alt="TradeGospel Logo"
              width={150}
              height={30}
              className="w-auto h-auto"
            />
          </div>

          {/* Menu Items Container */}
          <div className="w-[199px] h-[581px] mt-[86px] flex flex-col">
            {/* Menu Items */}
            <div className="flex flex-col">
              <Link
                href="/profile/profile-home"
                className={`w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] rounded-md ${
                  pathname === "/profile/profile-home"
                    ? "font-bold"
                    : "hover:bg-[#F3F4F6]"
                }`}
              >
                <Image
                  src="/livestream/home.png"
                  alt="Home"
                  width={24}
                  height={24}
                />
                <span>Home</span>
              </Link>

              <Link
                href="/profile/profile-live"
                className={`w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] rounded-md ${
                  pathname === "/profile/profile-live"
                    ? "font-bold"
                    : "hover:bg-[#F3F4F6]"
                }`}
              >
                <Image
                  src="/livestream/live.png"
                  alt="Live Streaming"
                  width={24}
                  height={24}
                />
                <span>Live Streaming</span>
              </Link>

              <Link
                href="#"
                className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-[#F3F4F6] rounded-md"
              >
                <Image
                  src="/livestream/chat.png"
                  alt="Communities"
                  width={24}
                  height={24}
                />
                <span>Communities</span>
              </Link>

              <Link
                href="#"
                className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-[#F3F4F6] rounded-md"
              >
                <Image
                  src="/livestream/search.png"
                  alt="Explore"
                  width={24}
                  height={24}
                />
                <span>Explore</span>
              </Link>

              <Link
                href="#"
                className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-[#F3F4F6] rounded-md"
              >
                <Image
                  src="/livestream/feed.png"
                  alt="Feed"
                  width={24}
                  height={24}
                />
                <span>Feed</span>
              </Link>
            </div>

            {/* Horizontal Line */}
            <div className="w-full h-[1px] bg-[#D1D5DB] my-4"></div>

            {/* Additional Menu Items */}
            <div className="flex flex-col">
              <Link
                href="#"
                className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-[#F3F4F6] rounded-md"
              >
                <Image
                  src="/livestream/network.png"
                  alt="Network"
                  width={24}
                  height={24}
                />
                <span>Network</span>
              </Link>

              <Link
                href="#"
                className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-[#F3F4F6] rounded-md"
              >
                <Image
                  src="/livestream/pages.png"
                  alt="Pages"
                  width={24}
                  height={24}
                />
                <span>Pages</span>
              </Link>

              <Link
                href="#"
                className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-[#F3F4F6] rounded-md"
              >
                <Image
                  src="/livestream/add.png"
                  alt="Product"
                  width={24}
                  height={24}
                />
                <span>Product</span>
              </Link>
            </div>

            {/* Desktop Close Button */}
            <button
              onClick={toggleSideMenu}
              className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-[#F3F4F6] rounded-md mt-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span>Close</span>
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-500 ease-in-out text-black ${mobileMenuOpen ? 'bg-opacity-50 opacity-100' : 'bg-opacity-0 opacity-0'}`}
          onClick={toggleMobileMenu}
        >
          <div 
            className={`fixed top-0 left-0 w-full bg-[#FFFFFF] shadow-lg transform transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
            style={{ height: '100vh' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-between">
              <Image
                src="/livestream/logo.png"
                alt="TradeGospel Logo"
                width={100}
                height={20}
                className="w-auto h-[20px]"
              />
              <button onClick={toggleMobileMenu} className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-64px)]">
              <div className="flex flex-col py-4 px-4">
                {/* Menu Items */}
                <div className="flex flex-col">
                  <Link
                    href="/profile/profile-home"
                    className={`w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] rounded-md ${
                      pathname === "/profile/profile-home"
                        ? "font-bold"
                        : "hover:bg-[#F3F4F6]"
                    }`}
                  >
                    <Image
                      src="/livestream/home.png"
                      alt="Home"
                      width={24}
                      height={24}
                    />
                    <span>Home</span>
                  </Link>

                  <Link
                    href="/profile/profile-live"
                    className={`w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] rounded-md ${
                      pathname === "/profile/profile-live"
                        ? "font-bold"
                        : "hover:bg-[#F3F4F6]"
                    }`}
                  >
                    <Image
                      src="/livestream/live.png"
                      alt="Live Streaming"
                      width={24}
                      height={24}
                    />
                    <span>Live Streaming</span>
                  </Link>

                  <Link
                    href="#"
                    className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-[#F3F4F6] rounded-md"
                  >
                    <Image
                      src="/livestream/chat.png"
                      alt="Communities"
                      width={24}
                      height={24}
                    />
                    <span>Communities</span>
                  </Link>

                  <Link
                    href="#"
                    className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-[#F3F4F6] rounded-md"
                  >
                    <Image
                      src="/livestream/search.png"
                      alt="Explore"
                      width={24}
                      height={24}
                    />
                    <span>Explore</span>
                  </Link>

                  <Link
                    href="#"
                    className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-[#F3F4F6] rounded-md"
                  >
                    <Image
                      src="/livestream/feed.png"
                      alt="Feed"
                      width={24}
                      height={24}
                    />
                    <span>Feed</span>
                  </Link>
                </div>

                {/* Horizontal Line */}
                <div className="w-full h-[1px] bg-[#D1D5DB] my-4"></div>

                {/* Additional Menu Items */}
                <div className="flex flex-col">
                  <Link
                    href="#"
                    className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-[#F3F4F6] rounded-md"
                  >
                    <Image
                      src="/livestream/network.png"
                      alt="Network"
                      width={24}
                      height={24}
                    />
                    <span>Network</span>
                  </Link>

                  <Link
                    href="#"
                    className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-[#F3F4F6] rounded-md"
                  >
                    <Image
                      src="/livestream/pages.png"
                      alt="Pages"
                      width={24}
                      height={24}
                    />
                    <span>Pages</span>
                  </Link>

                  <Link
                    href="#"
                    className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-[#F3F4F6] rounded-md"
                  >
                    <Image
                      src="/livestream/add.png"
                      alt="Product"
                      width={24}
                      height={24}
                    />
                    <span>Product</span>
                  </Link>
                </div>

                {/* Mobile Menu Close Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-[#F3F4F6] rounded-md mt-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`flex-1 flex flex-col ${sideMenuOpen ? 'lg:ml-[199px]' : 'ml-0'} transition-all duration-300`}>
        {/* Top Bar */}
        <div className="h-[70px] border-b border-[#E5E7EB] flex items-center justify-between px-4 lg:px-6">
          {/* Mobile Top Bar */}
          <div className="flex lg:hidden items-center gap-2 w-full">
            <button onClick={toggleMobileMenu} className="p-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <Image
              src="/livestream/logo.png"
              alt="TradeGospel Logo"
              width={100}
              height={20}
              className="w-auto h-[20px]"
            />
            <div className="flex items-center gap-2 ml-auto">
              <button className="p-2 border border-black rounded-full flex items-center justify-center">
                <Image src="/livestream/add.png" alt="Post" width={16} height={16} />
              </button>
              <div className="relative flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#EF4444] rounded-full text-[#FFFFFF] text-xs flex items-center justify-center">3</span>
              </div>
              <div className="relative">
                <button onClick={toggleProfileDropdown} className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="/landing/feature-two/dp.png"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </button>
                {/* Mobile Profile Dropdown */}
                {profileDropdownOpen && (
                  <div 
                    className={`absolute top-full right-0 mt-2 w-48 bg-[#FFFFFF] rounded-md shadow-lg z-50 transform transition-all duration-200 ease-out origin-top-right ${profileDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                  >
                    <div className="p-2 border-b border-[#E5E7EB]">
                      <p className="text-sm font-semibold">Karan Mehta</p>
                      <p className="text-xs text-[#6B7280]">@karanM</p>
                    </div>
                    <div className="py-1">
                      <Link href="#" className="block px-4 py-2 text-sm text-[#374151] hover:bg-[#F3F4F6]">My Profile</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-[#374151] hover:bg-[#F3F4F6]">Logout</Link>
                    </div>
                  </div>
                )}
                
                {/* Desktop Profile Dropdown */}
                {profileDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-[#FFFFFF] rounded-md shadow-lg z-50">
                    <div className="py-1">
                      <Link href="#" className="block px-4 py-2 text-sm text-[#374151] hover:bg-[#F3F4F6]">My Profile</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-[#374151] hover:bg-[#F3F4F6]">Logout</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Top Bar - Hidden on mobile */}
          <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-full">
            {/* Left: Logo and Search Bar */}
            <div className="flex items-center gap-4">
              {!sideMenuOpen && (
                <>
                  <button onClick={toggleSideMenu} className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </button>
                  <Image
                    src="/signup/tg-full-logo.png"
                    alt="TradeGospel Logo"
                    width={150}
                    height={30}
                    className="w-auto h-[20px]"
                  />
                </>
              )}
              <div className="w-[400px] h-[42px] flex items-center gap-[2px] border border-[#606060] rounded-[25px] px-[25px] py-[10px]">
                <Image src="/livestream/search.png" alt="Search" width={20} height={20} />
                <input type="text" placeholder="Search..." className="flex-1 outline-none ml-2 placeholder-[#374151]" />
              </div>
            </div>
            {/* Right: Post, Bell, Profile */}
            <div className="flex items-center gap-4">
              {/* Post Button */}
              <button className="w-[78.5px] h-[30px] flex items-center justify-center gap-[7.5px] border border-black rounded-[15px] px-[15px] py-[5px]">
                <Image src="/livestream/add.png" alt="Post" width={10} height={10} />
                Post
              </button>

              {/* Bell Icon */}
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#EF4444] rounded-full text-[#FFFFFF] text-xs flex items-center justify-center">3</span>
              </div>

              {/* Profile Section */}
              <div className="flex items-center gap-2 relative">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image src="/landing/feature-two/dp.png" alt="Profile" width={40} height={40} className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Karan Mehta</span>
                  <span className="text-xs text-[#6B7280]">@karanM</span>
                </div>
                <button onClick={toggleProfileDropdown} className="ml-1 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {profileDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-[#FFFFFF] rounded-md shadow-lg z-50">
                    <div className="py-1">
                      <Link href="#" className="block px-4 py-2 text-sm text-[#374151] hover:bg-[#F3F4F6]">My Profile</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-[#374151] hover:bg-[#F3F4F6]">Logout</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden p-4 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2 border border-[#606060] rounded-[25px] px-4 py-2">
            <Image src="/livestream/search.png" alt="Search" width={20} height={20} />
            <input type="text" placeholder="Search..." className="flex-1 outline-none" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-[#F9FAFB] overflow-auto">{children}</div>
      </div>
    </div>
  );
}
