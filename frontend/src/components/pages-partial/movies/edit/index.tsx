'use client';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import AppLayout from '@/components/layouts/AppLayout';

import MoviesForm from '../form';

export default function PartialEditMovies() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const id = searchParams.get('id');


  return (
    <AppLayout>
      <div className="py-16 px-[100px] flex flex-col min-h-screen w-full p-4 h-full ">
        <p className="mt-20 mb-2 text-5xl tracking-normal leading text-headingColor font-semibold">
          Edit
        </p>
        <div className="mt-10 w-3/4">
          <MoviesForm />
        </div>
      </div>
    </AppLayout>
  );
}
