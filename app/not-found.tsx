'use client';

import Link from 'next/link';
import './not-found.css';

export default function NotFoundPage() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>We cannot seem to find the page you are looking for.</p>
      <Link href="/" className="btn-home">
        Go Back Home
      </Link>
    </div>
  );
}
