import '../common/css/global.css';

import { useEffect } from 'react';

import { LikedGenresProvider } from '../context/LikedGenres';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line
      import('agnostic-axe').then(({ AxeObserver, logViolations }) => {
        const MyAxeObserver = new AxeObserver(logViolations);
        MyAxeObserver.observe(document);
      });
    }
  }, []);

  return (
    <LikedGenresProvider>
      <Component {...pageProps} />
    </LikedGenresProvider>
  );
};

export default App;
