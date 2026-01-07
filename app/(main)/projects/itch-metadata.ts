'use server';

import { config } from 'dotenv';
import { fetchItchGameData, GameMetadata } from 'itchio-metadata';
import { cache } from 'react';

config({ path: '.env.local' });

type GameDataReturn = GameMetadata & GameDataInput;

type GameDataInput = {
  itchIoPage: string;
  sourceCodePage: string;
};

export const getGameMetadata = cache(
  async ({ itchIoPage, ...opts }: GameDataInput): Promise<GameDataReturn | undefined> => {
    const { data } = await fetchItchGameData({
      gameUrl: itchIoPage,
      itchApiKey: process.env.ITCH_API_KEY
    });
    if (data === undefined) return undefined;
    return { ...opts, ...data, itchIoPage };
  }
);

export const getGamesMetadata = cache(
  async (games: GameDataInput[]): Promise<GameDataReturn[]> =>
    (await Promise.all(games.map((opts) => getGameMetadata(opts)))).filter((o) => o !== undefined)
);
