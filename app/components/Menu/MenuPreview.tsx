import Link from 'next/link';
import { PRODUCTS } from '../../constants/menu';
import MenuCard from './MenuCard';
import '../../menu/menu.css';
import PageTitle from '../PageTitle/PageTitle';

export default function MenuPreview() {
  return (
    <>
      <PageTitle title={'Menu'} />
      <div className="menu__inner">
        {PRODUCTS.slice(0, 6).map((product) => (
          <MenuCard key={product.name} product={product} />
        ))}
      </div>

      <div className="menu__actions">
        <Link href="/menu" className="watch-more-btn">
          Watch more
        </Link>
      </div>
    </>
  );
}
