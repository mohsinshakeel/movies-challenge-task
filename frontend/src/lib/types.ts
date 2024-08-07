/* eslint-disable no-unused-vars */
import { JSX, ReactNode } from 'react';

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

export type IconType = (_props: IconBaseProps) => JSX.Element;

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  image?: string;
  balance?: string;
}

export interface ILayoutProps {
  children?: ReactNode;
  description?: string;
  icon?: IconType;
  backIcon?: boolean;
  backLink?: string;
}

export interface IMovie {
  image?: string;
  title: string;
  id?: string;
  year?: string;
}
