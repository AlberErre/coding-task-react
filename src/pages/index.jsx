import { useState } from 'react';

import { GenreHeader } from '../components/GenreHeader';
import { GenreList } from '../components/GenreList';
import { GenreNavigation } from '../components/GenreNavigation';
import { Layout } from '../components/Layout/Layout';
import { useLikedGenresContext } from '../context/LikedGenres';
import { useGenres } from '../hooks/useGenres';

const IndexPage = () => {
  const { likedGenres, setLikedGenres } = useLikedGenresContext();

  const [genreOrder, setGenreOrder] = useState('alphabetical');

  const { popularGenres: genres } = useGenres(genreOrder);

  const numberOfshows = genres.reduce((acc, genre) => acc + genre.numShows, 0);
  const title = `Shows by Genre (${numberOfshows})`;

  const onLike = (genreId) => {
    // NOTE: remove it in case it was previously liked
    if (likedGenres.includes(genreId)) {
      setLikedGenres(likedGenres.filter((id) => id !== genreId));
      return;
    }

    setLikedGenres([...likedGenres, genreId]);
  };

  // TODO: navigate to an error page on this condition
  if (!genres.length) return null;

  return (
    <Layout title={title}>
      <section>
        <GenreNavigation />
        <GenreHeader setGenreOrder={setGenreOrder} title={title} />

        <GenreList genres={genres} onLike={onLike} />
      </section>
    </Layout>
  );
};

export default IndexPage;
