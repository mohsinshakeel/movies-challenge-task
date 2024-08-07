'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { IMovie } from '@/lib/types';
import MovieCard from '@/components/common/MovieCard';
import PaginationControls from '@/components/common/Pagination';
import { moviesUrl } from '@/configs/constants';
import { LogoutIcon, PlusIcon } from '@/assets/svgs';
import { useLogoutMutation } from '@/store/features/auth/authApi';
import { useAppDispatch } from '@/store/hooks';
import { userLoggedOut } from '@/store/features/auth/authSlice';

interface IMyMovies {
  movies: IMovie[];
}

export default function MyMovies({ movies }: IMyMovies) {
  // router
  const router = useRouter();
  //   states
  const [currentPage, setCurrentPage] = useState(1);
  //   rtq
  const [logout, { isLoading, isSuccess }] = useLogoutMutation();

  const dispatch = useAppDispatch();

  const itemsPerPage = 10;

  // Calculate the current page's movie list
  const currentMovies = movies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  //   handlers
  const handleClickMovie = () => {
    router.push(`${moviesUrl}edit`);
  };

  const handleClickCreate = () => {
    router.push(`${moviesUrl}create`);
  };

  const handleClickLogout = () => {
    try {
      logout({})
        .unwrap()
        .then(() => {
          dispatch(userLoggedOut());
        });
    } catch (error) {}
    router.push(`${moviesUrl}create`);
  };

  return (
    <div className="md:px-[100px]  mb-44 flex flex-col w-full">
      <div className="flex justify-between mt-20 mb-2 items-center">
        <div className=" flex gap-x-4  w-full items-center">
          <p className="text-3xl md:text-5xl tracking-normal leading text-headingColor font-semibold">
            Movies List
          </p>
          <PlusIcon onClick={handleClickCreate} className="cursor-pointer" />
        </div>
        <div className="flex gap-x-1 cursor-pointer">
          <p className="text-sm md:text-2xl hidden md:flex tracking-normal leading text-headingColor font-semibold">
            Logout
          </p>
          <LogoutIcon onClick={handleClickLogout} />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-12 gap-4">
        {currentMovies.map((movie) => (
          <div
            className="col-span-6 md:col-span-2 cursor-pointer"
            key={movie.title}
            onClick={handleClickMovie}
          >
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center relative mt-16">
        <PaginationControls
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalRows={movies.length}
        />
      </div>
    </div>
  );
}
