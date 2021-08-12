import { Layout } from '../components/Layout';
import { genres } from '../data/genres';

const IndexPage = () => (
  <Layout title="ACB Coding Task">
    <section>
      <h1>Genres</h1>
      <ul>
        {genres.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default IndexPage;
