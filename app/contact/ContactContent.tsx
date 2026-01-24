'use client';

import { motion } from 'framer-motion';
import './contact.scss';
import PageTitle from '../components/PageTitle/PageTitle';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0, 0, 0.58, 1] } },
};

export default function ContactContent() {
  return (
    <>
      <PageTitle title="Contact" />

      <motion.div
        className="contact__inner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="contact__grid">
          <motion.div className="contact__card" variants={itemVariants}>
            <div className="card-icon">📞</div>
            <h2>Get in Touch</h2>
            <p>
              <strong>Phone:</strong> <a href="tel:+1234567890">+1 234 567 890</a>
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:info@restaurant.com">info@restaurant.com</a>
            </p>
          </motion.div>
          {/* остальные карточки */}
        </div>
        <motion.div
          className="contact__map"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2157071641347!2d-73.985421!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a147!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1633000000000"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
