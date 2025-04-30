'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 xl:px-16 h-[60px] sm:h-[70px] xl:h-[80px] bg-white border-l-[1px] gap-2.5">
      <div className="flex items-center">
        <Image
          src="/landing/hero/tg-full-logo.png"
          alt="Trade Gospel Logo"
          width={244}
          height={35}
          className="w-auto h-[25px] sm:h-[30px] xl:h-[35px]"
          priority
        />
      </div>
      
      {/* Hamburger Menu Button */}
      <button 
        className="xl:hidden z-50 relative"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={`w-5 sm:w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-5 sm:w-6 h-0.5 bg-black my-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-5 sm:w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>

      {/* Desktop Menu */}
      <div className="hidden xl:flex items-center space-x-8">
        <Link 
          href="/" 
          className={`transition-colors ${pathname === '/home' ? 'font-bold text-black' : 'font-medium text-black hover:text-blue-600'}`}
        >
          Home
        </Link>
        <Link 
          href="/communities" 
          className={`transition-colors ${pathname === '/communities' ? 'font-bold text-black' : 'font-medium text-black hover:text-blue-600'}`}
        >
          Communities
        </Link>
        <Link 
          href="/events" 
          className={`transition-colors ${pathname === '/events' ? 'font-bold text-black' : 'font-medium text-black hover:text-blue-600'}`}
        >
          Events
        </Link>
        <Link 
          href="/live-streaming" 
          className={`transition-colors ${pathname === '/live-streaming' ? 'font-bold text-black' : 'font-medium text-black hover:text-blue-600'}`}
        >
          Live Streaming
        </Link>
        <Link 
          href="/feed" 
          className={`transition-colors ${pathname === '/feed' ? 'font-bold text-black' : 'font-medium text-black hover:text-blue-600'}`}
        >
          Feed
        </Link>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden xl:flex items-center gap-2.5">
        <Link 
          href="/login" 
          className="w-[90px] sm:w-[95px] xl:w-[103px] h-[36px] sm:h-[38px] xl:h-[42px] flex items-center justify-center bg-black text-white rounded-[24px] px-[20px] sm:px-[22px] xl:px-[25px] py-[8px] sm:py-[9px] xl:py-[10px] hover:bg-gray-800 transition-colors whitespace-nowrap text-sm sm:text-base"
        >
          Log IN
        </Link>
        <Link 
          href="/signup" 
          className="w-[90px] sm:w-[95px] xl:w-[103px] h-[36px] sm:h-[38px] xl:h-[42px] flex items-center justify-center bg-black text-white rounded-[24px] px-[20px] sm:px-[22px] xl:px-[25px] py-[8px] sm:py-[9px] xl:py-[10px] hover:bg-gray-800 transition-colors whitespace-nowrap text-sm sm:text-base"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 xl:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
          <Link 
            href="/" 
            className={`transition-colors text-xl ${pathname === '/' ? 'font-bold text-black' : 'font-medium text-black hover:text-blue-600'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/communities" 
            className={`transition-colors text-xl ${pathname === '/communities' ? 'font-bold text-black' : 'font-medium text-black hover:text-blue-600'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Communities
          </Link>
          <Link 
            href="/events" 
            className={`transition-colors text-xl ${pathname === '/events' ? 'font-bold text-black' : 'font-medium text-black hover:text-blue-600'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link 
            href="/live-streaming" 
            className={`transition-colors text-xl ${pathname === '/live-streaming' ? 'font-bold text-black' : 'font-medium text-black hover:text-blue-600'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Live Streaming
          </Link>
          <Link 
            href="/feed" 
            className={`transition-colors text-xl ${pathname === '/feed' ? 'font-bold text-black' : 'font-medium text-black hover:text-blue-600'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Feed
          </Link>
          
          <div className="flex flex-col items-center gap-4 mt-8">
            <Link 
              href="/login" 
              className="w-[103px] h-[42px] flex items-center justify-center bg-black text-white rounded-[24px] px-[25px] py-[10px] hover:bg-gray-800 transition-colors whitespace-nowrap"
              onClick={() => setIsMenuOpen(false)}
            >
              Log IN
            </Link>
            <Link 
              href="/signup/details" className="w-[103px] h-[42px] flex items-center justify-center bg-black text-white rounded-[24px] px-[25px] py-[10px] hover:bg-gray-800 transition-colors whitespace-nowrap">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}