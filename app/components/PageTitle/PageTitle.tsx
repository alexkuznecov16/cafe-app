interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <h1
      style={{
        fontSize: '48px',
        textAlign: 'center',
        color: '#00c3ff',
        textShadow: `
      0 0 5px #00c3ff,
      0 0 10px #00c3ff,
      0 0 20px #00c3ff,
      0 0 40px #00c3ff
    `,
        margin: '40px 0',
        textTransform: 'uppercase',
      }}
    >
      {title}
    </h1>
  );
}
