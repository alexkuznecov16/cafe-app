import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "16px", borderBottom: "1px solid #eee" }}>
      <nav style={{ display: "flex", gap: "24px", margin: "0 auto", width: "100%" }}>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/booking">Booking</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}