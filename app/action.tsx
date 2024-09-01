"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (
  {
    page,
    limit,
  }: {
    page?: number | undefined;
    limit?: number | undefined;
  } = {
    page: 1,
    limit: 20,
  }
) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${limit}`
  );
  const data = await response.json();
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

export const fetchAnimeDetails = async function (animeId: string) {
  const response = await fetch(`https://shikimori.one/api/animes/${animeId}`);
  const data = await response.json();
  return data;
};
