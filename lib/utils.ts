import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseJSON = (json: string): object | null => {
  try {
    const jsonObj = JSON.parse(json);
    if (jsonObj && typeof jsonObj === 'object') return jsonObj;
  } catch (err) {
    console.error(err);
    return null;
  }
  return null;
};
