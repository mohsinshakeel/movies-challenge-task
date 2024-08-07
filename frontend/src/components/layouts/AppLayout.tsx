'use client';

import { useRouter } from 'next/navigation';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getAuthDataSelector } from '@/store/features/auth/authSelector';
import { ILayoutProps } from '@/lib/types';
import { cn } from '@/lib/cn';

import TopNavbar from '../navbar/TopNavbar';

const AppLayout = ({ children, ...props }: ILayoutProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector(getAuthDataSelector);

  //   useEffect(() => {
  //     if (!auth.isAuthenticated) {
  //       dispatch(userLoggedOut());
  //       router.push('/login');
  //     }
  //   }, [auth.isAuthenticated, dispatch, router]);

  //   if (!auth.isAuthenticated) return null;

  return (
    <div className="w-full min-h-screen bg-background relative">
      <div className="flex background_mask w-full min-h-screen absolute bottom-0" />
      <div className="flex flex-col w-full">
        <div className={cn('flex flex-col ')}>{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
