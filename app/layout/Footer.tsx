export default function Footer() {
  return (
    <footer style={{ padding: "16px", borderTop: "1px solid #eee" }}>
      <p>© {new Date().getFullYear()} Cafe App</p>
    </footer>
  );
}