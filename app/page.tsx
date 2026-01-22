import './home.css';

export default function Home() {
  return (
    <div className="intro__inner">
      <div className="neon-lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="intro__content">
        <h1>Neon Restaurant</h1>
        <p>Experience the city’s finest dishes in a futuristic glow</p>
        <button className="intro__btn">Book a Table</button>
      </div>

      <div className="particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
    </div>
  );
}
