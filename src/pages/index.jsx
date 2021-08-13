import { useState } from 'react';

import { GenreSelector } from '../components/GenreSelector';
import { Layout } from '../components/Layout/Layout';
import { useGenres } from '../hooks/useGenres';

const IndexPage = () => {
  const [genreOrder, setGenreOrder] = useState('alphabetical');

  const { popularGenres: genres } = useGenres(genreOrder);

  const numberOfshows = genres.reduce((acc, genre) => acc + genre.numShows, 0);
  const title = `Shows by Genre (${numberOfshows})`;

  // TODO: navigate to an error page on this condition
  if (!genres.length) return null;

  return (
    <Layout title={title}>
      <section>
        <div className="spaceBetweenItems">
          <h1>{title}</h1>
          <GenreSelector onChange={setGenreOrder} />
        </div>

        <ul>
          {genres.map(({ id, title: genreTitle }) => (
            <li key={id}>{genreTitle}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default IndexPage;
