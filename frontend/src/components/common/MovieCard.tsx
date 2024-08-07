import React from 'react';
import { useAppSelector } from '@/store/hooks';
import { getAuthDataSelector } from '@/store/features/auth/authSelector';
import { IMovie } from '@/lib/types';
import { cn } from '@/lib/cn';
import Image from './image';

interface CardProps extends IMovie {
  className?: string;
}

const MovieCard = React.forwardRef<HTMLDivElement, CardProps>((card, ref) => {
  const { title, image, year, className, ...props } = card;

  return (
    <div
      className={cn('w-full rounded-2xl bg-card p-2 flex flex-col h-[350px] md:h-[450px]', className)}
      {...props}
      ref={ref}
    >
      <Image
        src={image || ''}
        alt="Movie Card"
        className="h-[60%] md:h-[80%] w-full rounded-xl"
      />
      <p className="text-headingColor text-xl font-medium mt-3">{title}</p>
      <p className="mt-2 text-headingColor text-sm font-normal">{year}</p>
    </div>
  );
});

MovieCard.displayName = 'MovieCard';

export default MovieCard;
