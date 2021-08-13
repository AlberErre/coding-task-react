import { Layout } from '../components/Layout';
import { useGenres } from '../hooks/useGenres';

const IndexPage = () => {
  const { popularGenres: genres } = useGenres();

  const numberOfshows = genres.reduce((acc, genre) => acc + genre.numShows, 0);
  const title = `Shows by Genre (${numberOfshows})`;

  // TODO: navigate to an error page on this condition
  if (!genres.length) return null;

  return (
    <Layout title={title}>
      <section>
        <h1>{title}</h1>
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
