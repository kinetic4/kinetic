import React, { useEffect, useRef, useState } from "react";
import { IconArrowsDiagonal, IconCaretDownFilled } from "@tabler/icons-react";
import { useWindowScroll } from "react-use";
import Button from "./Button";
import gsap from "gsap";

const navItems = ['Nexus ↘', 'Vault ↘', 'Prolouge', 'About', 'Contact']

const Navbar:React.FC = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [isIndicatorActive, setIndicatorActive] = useState(false)
  const [LastScrollY, setLastScrollY] = useState(0)
  const [isNavVisible, setisNavVisible] = useState(true)

  const { y: currentScrollY } = useWindowScroll()
  
  const navContainerRef = useRef<HTMLDivElement>(null);
  const audioElementRef = useRef<HTMLVideoElement | null>(null)

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIndicatorActive((prev) => !prev)
  }

  useEffect(() => {
    if(isAudioPlaying && audioElementRef.current) {
        audioElementRef.current.play()
    } else if (audioElementRef.current) {
        audioElementRef.current.pause()
    }
  }, [isAudioPlaying])

  useEffect(() => {
    if(navContainerRef.current) {
      if(currentScrollY === 0) {
          setisNavVisible(true)
          navContainerRef.current.classList.remove('floating-nav')
      } else if (currentScrollY > LastScrollY) {
          setisNavVisible(false)
          navContainerRef.current.classList.add('floating-nav')
      } else if (currentScrollY < LastScrollY) {
          setisNavVisible(true)
          navContainerRef.current.classList.add('floating-nav')
      }
    }
    setLastScrollY(currentScrollY)
  }, [currentScrollY, LastScrollY])


  useEffect(() => {
    gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2
    })
  }, [isNavVisible])


  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7 ">
            <a href="#">
            <IconArrowsDiagonal className="text-white w-10 h-9 cursor-pointer" />
            </a>
            <Button
              id="product-button"
              title="Products"
              rightIcon={IconCaretDownFilled}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-2"
            />
            <Button 
            id="whitepaper-button"
            title="Whitepaper"
            containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-2"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
                {navItems.map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
                        {item} 
                    </a>
                ))}
            </div>
            <button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudioIndicator}>
                <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop />
                {[1, 2, 3, 4].map((bar) => (
                    <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{ animationDelay: `${bar * 0.1}s` }}/>
                ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
