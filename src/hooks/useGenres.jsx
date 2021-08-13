import { useEffect, useState } from 'react';

import { genres as sourceGenres } from '../data/genres';

export const useGenres = () => {
  const [genres, setGenres] = useState(sourceGenres || []);

  // NOTE: reload new genres if the file changes
  useEffect(() => {
    setGenres(sourceGenres || []);
  }, [sourceGenres]);

  return { genres };
};
