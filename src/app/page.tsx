'use client';
import { Suspense, useEffect } from 'react';
import Loader from './loading';
import HomePage from './(pages)/_home/page';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<Loader />}>
      <HomePage />
    </Suspense>
  );
}
