export default function Footer() {
  return (
    <footer
      style={{
        height: '100px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '1px solid rgb(0, 195, 255)',
        textAlign: 'center',
        color: '#fff',
        boxShadow: '0 -10px 20px rgba(0, 195, 255, 0.5), 0 -5px 10px rgba(0, 150, 255, 0.3)',
        marginTop: '20px',
        backgroundColor: '#2e2e2e',
      }}
    >
      <p>© {new Date().getFullYear()} Cafe App</p>
    </footer>
  );
}
