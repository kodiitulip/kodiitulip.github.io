import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseJSON = (json: string): object | null => {
  try {
    const jsonObj = JSON.parse(json);
    if (jsonObj && typeof jsonObj === 'object') return jsonObj;
  } catch (e) {
    if (e) return null;
    return null;
  }
  return null;
};

export const setHTMLAttribute = (qualifiedName: string, value: string) =>
  document.documentElement.setAttribute(qualifiedName, value);

export const cssMatchMedia = (query: string) => window.matchMedia(query).matches;
