'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import AppLayout from '@/components/layouts/AppLayout';
import { Button } from '@/components/ui/button';
import MoviesForm from '../form';

export default function PartialAddMovies() {
  const movies = [];

  const router = useRouter();

  const handleNewMovie = () => {
    router.push('');
  };

  return (
    <AppLayout>
      <div className="py-16 md:px-[100px] flex flex-col min-h-screen w-full p-4 h-full ">
        <p className="mt-20 mb-2 text-2xl md:text-5xl tracking-normal leading text-headingColor font-semibold">
          Create a new movie
        </p>
        <div className="mt-10 w-3/4">
          <MoviesForm />
        </div>
      </div>
    </AppLayout>
  );
}
