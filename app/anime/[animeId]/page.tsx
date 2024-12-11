import { fetchAnimeDetails } from "@/app/action";
import RangeSelector from "@/components/RangeSelector";
import React from "react";

const AnimeDetails = async ({
  params: { animeId },
}: {
  params: {
    animeId: string;
  };
}) => {
  const animeDetails = await fetchAnimeDetails(animeId);

  const { name, duration } = animeDetails;

  return (
    <div>
      <div className="flex gap-3">
        <div>Name</div>
        <div>{name}</div>
      </div>
      <RangeSelector maxRange={duration} />
    </div>
  );
};

export default AnimeDetails;
