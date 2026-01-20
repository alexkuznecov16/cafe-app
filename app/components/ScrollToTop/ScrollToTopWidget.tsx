"use client";

import { IoIosArrowUp } from 'react-icons/io';
import "./ScrollToTopWidget.css"
import { useState, useEffect } from 'react';

export default function ScrollToTopWidget() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
        return;
      }

      setShowButton(false);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button onClick={() => scrollToTop()} style={{display: showButton ? 'block' : 'none'}} type='button' title='Scroll to top' className="ScrollToTopWidget">
      <IoIosArrowUp size={36}/>
    </button>
  )
}