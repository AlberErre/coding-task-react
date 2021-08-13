import { useEffect, useState } from 'react';

import { genres as sourceGenres } from '../data/genres';

export const useGenres = () => {
  const [genres, setGenres] = useState(sourceGenres || []);

  // NOTE: reload new genres if the file changes
  useEffect(() => {
    setGenres(sourceGenres || []);
  }, [sourceGenres]);

  const popularGenres = genres.filter((genre) => genre.numShows > 4);

  return { genres, popularGenres };
};
