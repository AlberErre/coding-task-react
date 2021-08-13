import { useEffect, useState } from 'react';

import { genres as sourceGenres } from '../data/genres';
import { sortAlphabetically, sortByShowsNumber } from '../utils/sorting';

export const useGenres = (order) => {
  const [genres, setGenres] = useState(sourceGenres || []);

  // NOTE: reload new genres if the file changes
  useEffect(() => {
    setGenres(sourceGenres || []);
  }, [sourceGenres]);

  let orderedGenres = genres;
  if (order === 'alphabetical') orderedGenres = genres.sort(sortAlphabetically);
  if (order === 'showsNumber') orderedGenres = genres.sort(sortByShowsNumber);

  return {
    genres: orderedGenres,
    popularGenres: orderedGenres.filter((genre) => genre.numShows > 4),
  };
};
