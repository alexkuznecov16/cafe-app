'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../lib/store';
import { loadMore } from '../../lib/slices/menuSlice';
import { useEffect, useRef } from 'react';
import MenuCard from './MenuCard';
import PageTitle from '../PageTitle/PageTitle';

export default function MenuFull() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, visibleCount } = useSelector((state: RootState) => state.product);

  const loaderRef = useRef<HTMLDivElement>(null);
  const visibleProducts = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  useEffect(() => {
    if (!hasMore || !loaderRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) dispatch(loadMore());
    });

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [dispatch, hasMore]);

  return (
    <>
      <PageTitle title={'Menu'} />
      <div className="menu__inner">
        {visibleProducts.map((product) => (
          <MenuCard key={product.name} product={product} />
        ))}

        {hasMore && <div ref={loaderRef}>Loading more...</div>}
      </div>
    </>
  );
}
