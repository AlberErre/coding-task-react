import { Layout } from '../components/Layout';
import { useGenres } from '../hooks/useGenres';

const IndexPage = () => {
  const { genres } = useGenres();

  const numberOfshows = genres.reduce((acc, genre) => acc + genre.numShows, 0);

  // TODO: navigate to an error page on this condition
  if (!genres.length) return null;

  return (
    <Layout title="Shows by Genre">
      <section>
        <h1>{`Shows by Genre (${numberOfshows})`}</h1>
        <ul>
          {genres.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default IndexPage;
