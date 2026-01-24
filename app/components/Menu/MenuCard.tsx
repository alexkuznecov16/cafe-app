import Image from 'next/image';
import { Product } from '../../constants/menu';

export default function MenuCard({ product }: { product: Product }) {
  return (
    <div className="menu--item">
      <div className="item_up">
        <Image
          src={`/${product.img || 'placeholder.jpg'}`}
          alt={product.name}
          width={300}
          height={300}
        />
        <p className="title">{product.name}</p>
        <span className="price">{product.price}$</span>
      </div>

      <div className="item_down">
        <p className="description">{product.description}</p>
      </div>
    </div>
  );
}
