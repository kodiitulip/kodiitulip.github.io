import { NextRequest } from 'next/server';
import { cache } from 'react';

type ItchIoGameData = {
  id: number;
  published: boolean;
  title: string;
  url: string;
  cover_url: string;
  p_android: boolean;
  p_linux: boolean;
  p_osx: boolean;
  p_windows: boolean;
  short_text: string;
  type: 'default' | 'html' | string;
  published_at: Date;
  created_at: Date;
  // downloads_count: number;
  // min_price: number;
  // purchases_count: number;
  // views_count: number;
  // earnings: object[];
};

type SortableModes = 'id' | 'title' | 'published_at' | 'created_at';

type AppendedGameData = ItchIoGameData & { source_code: string };

export const fetchItchIoPublishedGames = cache(
  async (sortBy: SortableModes = 'published_at'): Promise<AppendedGameData[]> => {
    const req = new NextRequest('https://itch.io/api/1/key/my-games', { method: 'GET' });
    req.headers.append('Authorization', 'Bearer ' + process.env.ITCH_API_KEY);

    const data: { games: ItchIoGameData[] } = await fetch(req).then((res) => res.json());
    const res: AppendedGameData[] = data.games
      .map((game) => {
        const githubRepoBase = 'https://github.com/kodiitulip/';
        const githubRepo = githubRepoBase + game.url.split('/').pop();
        return { ...game, source_code: githubRepo };
      })
      .filter(({ published }) => published);
    res.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1));
    return res;
  }
);
