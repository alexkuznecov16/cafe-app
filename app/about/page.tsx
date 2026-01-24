'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './about.scss';
import Link from 'next/link';
import PageTitle from '../components/PageTitle/PageTitle';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function About() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const yFast = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  return (
    <>
      <div className="parallax">
        <motion.div className="parallax__layer layer1" style={{ y: ySlow }} />
        <motion.div className="parallax__layer layer2" style={{ y: yFast }} />
      </div>
      <PageTitle title={'About'} />

      <motion.section className="about" variants={container} initial="hidden" animate="visible">
        <motion.div className="about__card wide" variants={item}>
          <span className="icon">🔥</span>
          <h2>Our Story</h2>
          <p>
            Our restaurant was born from a simple idea — to combine bold flavors, honest
            ingredients, and unforgettable atmosphere.
          </p>
          <p>
            Since <span>2012</span>, we’ve been creating not just food, but emotions. Every dish
            tells a story of passion, fire, and craft.
          </p>
        </motion.div>

        <motion.div className="about__stats">
          <motion.div className="stat" variants={item}>
            <h3>12+</h3>
            <p>Years of Experience</p>
          </motion.div>

          <motion.div className="stat" variants={item}>
            <h3>250K+</h3>
            <p>Happy Guests</p>
          </motion.div>

          <motion.div className="stat" variants={item}>
            <h3>80+</h3>
            <p>Signature Dishes</p>
          </motion.div>

          <motion.div className="stat" variants={item}>
            <h3>5★</h3>
            <p>Average Rating</p>
          </motion.div>
        </motion.div>

        <motion.div className="about__card" variants={item}>
          <span className="icon">🧠</span>
          <h2>Philosophy</h2>
          <p>We believe food should surprise, inspire and bring people together.</p>
          <p>
            No compromises. No shortcuts. Only fresh ingredients, live fire and creative energy.
          </p>
        </motion.div>

        <motion.div className="about__card" variants={item}>
          <span className="icon">🎶</span>
          <h2>Atmosphere</h2>
          <p>Neon lights, deep beats, open kitchen, and the smell of fire.</p>
          <p>This is not just a restaurant — this is a place where nights turn into memories.</p>
        </motion.div>

        <motion.div className="about__timeline" variants={container}>
          <motion.h2 variants={item}>Our Journey</motion.h2>

          <motion.div className="timeline">
            <motion.div className="timeline__item" variants={item}>
              <span>2012</span>
              <p>Restaurant founded. Small space, big dreams and open fire.</p>
            </motion.div>

            <motion.div className="timeline__item" variants={item}>
              <span>2015</span>
              <p>First expansion and introduction of signature fire-grill menu.</p>
            </motion.div>

            <motion.div className="timeline__item" variants={item}>
              <span>2018</span>
              <p>Awarded as one of the most atmospheric restaurants in the city.</p>
            </motion.div>

            <motion.div className="timeline__item" variants={item}>
              <span>2022</span>
              <p>New concept, neon design and live DJ nights.</p>
            </motion.div>

            <motion.div className="timeline__item" variants={item}>
              <span>Today</span>
              <p>Thousands of guests, hundreds of nights, one passion.</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="about__team" variants={container}>
          <motion.h2 variants={item}>Our Team</motion.h2>

          <div className="team__grid">
            <motion.div className="team__card" variants={item}>
              <span>👨‍🍳</span>
              <h3>Head Chef</h3>
              <p>10+ years of fire-grill mastery and flavor experiments.</p>
            </motion.div>

            <motion.div className="team__card" variants={item}>
              <span>🍷</span>
              <h3>Sommelier</h3>
              <p>Perfect wine pairing for every mood and dish.</p>
            </motion.div>

            <motion.div className="team__card" variants={item}>
              <span>🎧</span>
              <h3>DJ & Atmosphere</h3>
              <p>Music that turns dinner into a night to remember.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="about__why" variants={container}>
          <motion.h2 variants={item}>Why Guests Choose Us</motion.h2>

          <div className="why__grid">
            <motion.div className="why__item" variants={item}>
              🔥 Live fire cooking
            </motion.div>
            <motion.div className="why__item" variants={item}>
              🌿 Fresh local ingredients
            </motion.div>
            <motion.div className="why__item" variants={item}>
              🎶 Night atmosphere
            </motion.div>
            <motion.div className="why__item" variants={item}>
              🍸 Signature cocktails
            </motion.div>
            <motion.div className="why__item" variants={item}>
              ❤️ Soul & passion
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="about__cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Feel the Fire?</h2>
          <p>Book your table and become part of our story.</p>
          <Link href={'/booking'}>Reserve Now</Link>
        </motion.div>
      </motion.section>
    </>
  );
}
