'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import AppLayout from '@/components/layouts/AppLayout';
import { Button } from '@/components/ui/button';
import { moviesUrl } from '@/configs/constants';
import { IMovie } from '@/lib/types';

import MyMovies from './MyMovies';

const movies: IMovie[] = [
  {
    title: 'Inception',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '1',
    year: '2010',
  },
  {
    title: 'The Shawshank Redemption',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '2',
    year: '1994',
  },
  {
    title: 'The Godfather',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '3',
    year: '1972',
  },
  {
    title: 'The Dark Knight',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '4',
    year: '2008',
  },
  {
    title: 'Pulp Fiction',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '5',
    year: '1994',
  },
  {
    title: "Schindler's List",
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '6',
    year: '1993',
  },
  {
    title: 'The Lord of the Rings:',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '7',
    year: '2003',
  },
  {
    title: 'Fight Club',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '8',
    year: '1999',
  },
  {
    title: 'Forrest Gump',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '9',
    year: '1994',
  },
  {
    title: 'The Matrix',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '10',
    year: '1999',
  },
  {
    title: 'Goodfellas',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '11',
    year: '1990',
  },
  {
    title: 'The Empire Strikes Back',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '12',
    year: '1980',
  },
  {
    title: 'Interstellar',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '13',
    year: '2014',
  },
  {
    title: 'Parasite',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '14',
    year: '2019',
  },
  {
    title: 'Gladiator',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '15',
    year: '2000',
  },
  {
    title: 'The Lion King',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '16',
    year: '1994',
  },
  {
    title: 'Jurassic Park',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '17',
    year: '1993',
  },
  {
    title: 'Titanic',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '18',
    year: '1997',
  },
  {
    title: 'Braveheart',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '19',
    year: '1995',
  },
  {
    title: 'The Departed',
    image: 'https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
    id: '20',
    year: '2006',
  },
];

export default function PartialMovies() {
  const router = useRouter();

  const handleAddMovie = () => {
    router.push(`${moviesUrl}create`);
  };

  return (
    <AppLayout>
      <div className="z-50 flex  min-h-screen w-full p-4 h-full ">
        {movies.length === 0 ? (
          <div className="flex flex-col gap-y-6 items-center justify-center">
            <p className="mt-20 mb-2 text-5xl tracking-normal leading-8 text-center text-headingColor font-bold">
              Your movie list is empty
            </p>
            <Button onClick={handleAddMovie} className="w-1/3 cursor-pointer">
              Add a new movie
            </Button>
          </div>
        ) : (
          <MyMovies movies={movies} />
        )}
      </div>
    </AppLayout>
  );
}
