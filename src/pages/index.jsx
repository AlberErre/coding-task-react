import { useState } from 'react';

import { GenreHeader } from '../components/GenreHeader';
import { GenreList } from '../components/GenreList';
import { Layout } from '../components/Layout/Layout';
import { useGenres } from '../hooks/useGenres';

const IndexPage = () => {
  const [genreOrder, setGenreOrder] = useState('alphabetical');

  const { popularGenres: genres } = useGenres(genreOrder);

  const numberOfshows = genres.reduce((acc, genre) => acc + genre.numShows, 0);
  const title = `Shows by Genre (${numberOfshows})`;

  const onLike = () => {};

  // TODO: navigate to an error page on this condition
  if (!genres.length) return null;

  return (
    <Layout title={title}>
      <section>
        <GenreHeader setGenreOrder={setGenreOrder} title={title} />
        <GenreList genres={genres} onLike={onLike} />
      </section>
    </Layout>
  );
};

export default IndexPage;
