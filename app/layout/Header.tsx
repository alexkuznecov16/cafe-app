import Link from 'next/link';
import './header.css';

export default function Header() {
  const linkStyle = {
    color: '#f0f0f0',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textShadow: '0 0 5px #00c3ff, 0 0 10px #66dfff',
    transition: 'all 0.3s ease',
    position: 'relative',
  };

  return (
    <header
      style={{
        padding: '30px 0px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '1px solid rgb(0, 195, 255)',
        textAlign: 'center',
        color: '#fff',
        boxShadow: '0 10px 20px rgba(0, 195, 255, 0.5), 0 5px 10px rgba(0, 150, 255, 0.3)',
      }}
    >
      <nav
        style={{
          display: 'flex',
          gap: '36px',
          margin: '0 auto',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link href="/" style={linkStyle}>
          Home
        </Link>
        <Link href="/menu" style={linkStyle}>
          Menu
        </Link>
        <Link href="/booking" style={linkStyle}>
          Booking
        </Link>
        <Link href="/contact" style={linkStyle}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
