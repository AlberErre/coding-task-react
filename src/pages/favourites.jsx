import { GenreHeader } from '../components/GenreHeader';
import { GenreList } from '../components/GenreList';
import { GenreNavigation } from '../components/GenreNavigation';
import { Layout } from '../components/Layout/Layout';
import { useLikedGenresContext } from '../context/LikedGenres';
import { useGenres } from '../hooks/useGenres';

const Favourites = () => {
  const { likedGenres, setLikedGenres } = useLikedGenresContext();

  const { popularGenres: genres } = useGenres();

  const title = 'Favourite Genres';

  const favouriteGenres = genres.filter((genre) =>
    likedGenres.includes(genre.id)
  );

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
        <GenreHeader title={title} />

        {!favouriteGenres.length && <p>No favourite genres selected</p>}

        {!!favouriteGenres.length && (
          <GenreList genres={favouriteGenres} onLike={onLike} />
        )}
      </section>
    </Layout>
  );
};

export default Favourites;
