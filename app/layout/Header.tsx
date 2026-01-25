'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      html.style.setProperty('overflow', 'hidden');
    } else {
      html.style.setProperty('overflow', '');
    }
    return () => {
      html.style.setProperty('overflow', '');
    };
  }, [isOpen]);

  const linkStyle: React.CSSProperties = {
    color: '#f0f0f0',
    fontWeight: 'bold',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textShadow: '0 0 5px #00c3ff, 0 0 10px #66dfff',
    position: 'relative',
  };

  return (
    <header>
      <nav className={isOpen ? 'open' : ''}>
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav-links">
          <Link onClick={() => setIsOpen(false)} href="/" style={linkStyle}>
            Home
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/menu" style={linkStyle}>
            Menu
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/booking" style={linkStyle}>
            Booking
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/about" style={linkStyle}>
            About
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/contact" style={linkStyle}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
