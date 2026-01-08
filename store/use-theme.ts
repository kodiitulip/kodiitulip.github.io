import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Colors = 'love' | 'gold' | 'rose' | 'pine' | 'foam' | 'iris';
export type Theme = 'dawn' | 'moon';

type GlobalThemeState = {
  theme: Theme;
  color: Colors;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setColor: (color: Colors) => void;
};

export const useGlobalTheme = create(
  persist<GlobalThemeState>(
    (set, get) => ({
      theme: 'moon',
      toggleTheme: () => set({ theme: get().theme === 'moon' ? 'dawn' : 'moon' }),
      setTheme: (theme) => set({ theme }),
      color: 'love',
      setColor: (color) => set({ color })
    }),
    {
      name: 'data-theme'
    }
  )
);
