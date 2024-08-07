import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { LogoutIcon } from '@/assets/svgs';
import { getAuthDataSelector } from '@/store/features/auth/authSelector';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import NextImage from '@/components/ui/next-image';

import { Button } from '@/components/ui/button';
import { useLogoutMutation } from '@/store/features/auth/authApi';
import { userLoggedOut } from '@/store/features/auth/authSlice';
import { loginUrl } from '@/configs/constants';
import { ILayoutProps } from '@/lib/types';

interface ITopNavbar extends ILayoutProps {}

const TopNavbar = ({}: ITopNavbar) => {
  // redux
  const { user } = useAppSelector(getAuthDataSelector);
  // rtq
  const [logout] = useLogoutMutation();

  const router = useRouter();

  const dispatch = useAppDispatch();

  // handlers
  const handleLogout = useCallback(async () => {
    try {
      logout({});
      dispatch(userLoggedOut());
      router.push(loginUrl);
    } catch (error) {
      router.push(loginUrl);
      console.error('Failed to logout:', error);
    }
  }, [logout, dispatch, router]);


  return (
    <div className="mx-2 min-h-[70px] flex w-full items-center justify-between">
      <div className="flex flex-row gap-x-2 items-center justify-center  ">
        <div className="py-4 flex flex-row justify-center items-center">
          <div className="border-l-2  border-border flex flex-row items-center cursor-pointer space-x-2 ">
            <div className="flex flex-col ">
              <p className="font-medium">{user?.name || 'User Name'}</p>
              <p className="text-sm text-muted-foreground">
                {user?.email || 'user@example.com'}
              </p>
            </div>
            <Button
              className=" rounded-none border-none !outline-none bg-transaparent hover:bg-transaparent !p-0 transition-none"
              variant={'outline'}
              onClick={handleLogout}
            >
              Logout <LogoutIcon className="w-4 h-4 mr-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
