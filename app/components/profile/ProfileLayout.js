"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileLayout({ children }) {
  const [sideMenuOpen, setSideMenuOpen] = useState(true);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Side Menu */}
      {sideMenuOpen && (
        <div className="fixed left-[1px] top-0 w-[199px] h-[778px] flex flex-col gap-[57px] pt-[27px] pb-[27px] bg-white shadow-md z-50">
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
                    : "hover:bg-gray-100"
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
                    : "hover:bg-gray-100"
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
                className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-gray-100 rounded-md"
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
                className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-gray-100 rounded-md"
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
                className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-gray-100 rounded-md"
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
            <div className="w-full h-[1px] bg-gray-300 my-4"></div>

            {/* Additional Menu Items */}
            <div className="flex flex-col">
              <Link
                href="#"
                className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-gray-100 rounded-md"
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
                className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-gray-100 rounded-md"
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
                className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-gray-100 rounded-md"
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

            {/* Close Button */}
            <button
              onClick={toggleSideMenu}
              className="w-[189px] h-[42px] ml-[10px] flex items-center gap-[10px] p-[10px] hover:bg-gray-100 rounded-md mt-auto"
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

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col ${
          sideMenuOpen ? "ml-[199px]" : "ml-0"
        } transition-all duration-300`}
      >
        {/* Top Bar */}
        <div className="h-[70px] border-b border-gray-200 flex items-center justify-between px-6">
          {/* Left: Menu Toggle Button (when side menu is closed) and Search Bar */}
          <div className="flex items-center gap-4">
            {/* Menu Toggle Button (visible when side menu is closed) */}
            {!sideMenuOpen && (
              <button
                onClick={toggleSideMenu}
                className="p-2 rounded-md hover:bg-gray-100 mr-2"
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
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            )}

            {!sideMenuOpen && (
              <div className="px-4 w-[199px]">
                <Image
                  src="/signup/tg-full-logo.png"
                  alt="TradeGospel Logo"
                  width={157}
                  height={30}
                  className="w-auto h-auto"
                />
              </div>
            )}

            {/* Search Bar */}
            <div className="w-[400px] h-[42px] flex items-center gap-[2px] border border-[#606060] rounded-[25px] px-[25px] py-[10px]">
              <Image
                src="/livestream/search.png"
                alt="Search"
                width={20}
                height={20}
              />
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 outline-none ml-2"
                onClick={() => console.log("Navigate to search")}
              />
            </div>
          </div>

          {/* Right: Post, Bell, Profile */}
          <div className="flex items-center gap-4">
            {/* Post Button */}
            <button
              className="w-[78.5px] h-[30px] flex items-center justify-center gap-[7.5px] border border-black rounded-[15px] px-[15px] py-[5px]"
              onClick={() => console.log("Open overlay: private post frame")}
            >
              <Image
                src="/livestream/add.png"
                alt="Post"
                width={10}
                height={10}
              />
              Post
            </button>

            {/* Bell Icon */}
            <div className="relative">
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
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                3
              </span>
            </div>

            {/* Profile Section */}
            <div className="flex items-center gap-2 relative">
              {/* Profile Image */}
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/landing/feature-two/dp.png"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>

              {/* Name and Username */}
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Karan Mehta</span>
                <span className="text-xs text-gray-500">@karanM</span>
              </div>

              {/* Dropdown Icon */}
              <button
                onClick={toggleProfileDropdown}
                className="ml-1 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {/* Profile Dropdown Menu */}
              {profileDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 overflow-hidden">
                  <div className="py-1">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Area - This is where the children will be rendered */}
        <div className="flex-1 bg-gray-50">{children}</div>
      </div>
    </div>
  );
}
