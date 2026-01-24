import { Metadata } from 'next';
import './menu.css';
import MenuFull from '../components/Menu/MenuFull';

export const metadata: Metadata = {
  title: 'Menu | Neon Restaurant',
  description:
    'Explore Neon Restaurant’s signature fire-grilled dishes, fresh local ingredients, and crafted cocktails. Join thousands of happy guests and taste the best in town!',
};

export default function Menu() {
  return (
    <>
      <MenuFull />
    </>
  );
}
