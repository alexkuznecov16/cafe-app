'use client';

import { motion } from 'framer-motion';
import './partners.css';
import Image from 'next/image';

const vipGuests = [
  { name: 'Elon Musk', img: '/partners/musk.jpg' },
  { name: 'Gordon Ramsay', img: '/partners/ramsay.jpg' },
  // { name: 'Beyoncé', img: '/partners/beyonce.jpg' },
  { name: 'Cristiano Ronaldo', img: '/partners/ronaldo.jpg' },
];

const brandPartners = [
  { name: 'NeonTech', logo: '/partners/neon-tech.png' },
  { name: 'CyberFuel', logo: '/partners/cyberfuel.png' },
  { name: 'TacoBell', logo: '/partners/tacobell.png' },
  { name: 'Microsoft', logo: '/partners/microsoft.png' },
  { name: 'Walmart', logo: '/partners/walmart.png' },
];

export default function Partners() {
  return (
    <section className="partners">
      <h2 className="partners__title">VIP Guests</h2>
      <div className="partners__grid vip">
        {vipGuests.map((guest, i) => (
          <motion.div
            className="partner__card"
            key={i}
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <div className="partner__img">
              <Image src={guest.img} alt={guest.name} width={200} height={200} />
            </div>
            <h3>{guest.name}</h3>
          </motion.div>
        ))}
      </div>

      <h2 className="partners__title">Our Partners</h2>
      <div className="partners__slider-wrapper">
        {brandPartners.map((brand, i) => (
          <motion.div
            className="partner__brand"
            key={i} // Не забудьте ключ
            whileHover={{ scale: 1.1 }}
            animate={{
              y: [0, -5, 0],
              boxShadow: ['0 0 0px #00c3ff', '0 0 20px #00c3ff', '0 0 0px #00c3ff'],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: [0.42, 0, 0.58, 1] }}
          >
            <Image src={brand.logo} alt={brand.name} width={150} height={150} />
            <span>{brand.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
