'use client';

import { useRef, useState } from 'react';
import './home.css';
import Menu from './menu/page';
import Link from 'next/link';
import About from './about/page';
import Partners from './components/Partners/Partners';
import MenuPreview from './components/Menu/MenuPreview';

interface Spark {
  id: number;
  x: number;
  y: number;
  tx: string; // Добавляем сюда предвычисленные значения
  ty: string;
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sparks, setSparks] = useState<Spark[]>([]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);

      // Генерируем случайные направления разлета ЗДЕСЬ, а не в рендере
      const newSpark: Spark = {
        id: Date.now() + Math.random(),
        x,
        y,
        tx: `${(Math.random() - 0.5) * 200}px`,
        ty: `${(Math.random() - 0.5) * 200}px`,
      };

      setSparks((prev) => [...prev.slice(-20), newSpark]);
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
      }, 800);
    }
  };

  return (
    <>
      <div className="intro__inner" ref={containerRef} onMouseMove={handleMouseMove}>
        <div className="mouse-interaction">
          {sparks.map((spark) => (
            <span
              key={spark.id}
              className="spark"
              style={
                {
                  left: spark.x,
                  top: spark.y,
                  '--tx': spark.tx, // Теперь это стабильные данные из объекта
                  '--ty': spark.ty,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        <div className="neon-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="intro__content">
          <h1>Neon Restaurant</h1>
          <p>Experience the city’s finest dishes in a futuristic glow</p>
          <Link href={'/booking'} className="intro__btn">
            Book a Table
          </Link>
        </div>

        <div className="particles">
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i}></span>
          ))}
        </div>
      </div>

      <div className="menu--container">
        <MenuPreview />
      </div>
      <About />
      <div className="partners--container">
        <Partners />
      </div>
    </>
  );
}
