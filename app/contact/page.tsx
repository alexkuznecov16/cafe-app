import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact | Neon Restaurant',
  description:
    'Get in touch with Neon Restaurant. Visit, call, or follow us on social media. Join thousands of happy guests!',
};

export default function Page() {
  return <ContactContent />;
}
