import React from 'react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const LINKTREE_URL = "https://linktr.ee/shiksenergy";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface TestimonialProps {
  name: string;
  text: string;
  role?: string;
}
