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
    <header className="cyber-header">
      <nav className={isOpen ? 'open' : ''}>
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* Все элементы в одном контейнере для центровки */}
        <div className="nav-links">
          <div className="logo">
            <Link href="/">NEON<span>RESTAURANT</span></Link>
          </div>

          {['Home', 'Menu', 'Booking', 'About', 'Contact'].map((item) => (
            <Link 
              key={item} 
              onClick={() => setIsOpen(false)} 
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="nav-item"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
