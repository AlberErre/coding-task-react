import React, { createContext, useContext, useState } from 'react';

const LikedGenresContext = createContext(undefined);

export const LikedGenresProvider = ({ children }) => {
  const [likedGenres, setLikedGenres] = useState([]);

  return (
    <LikedGenresContext.Provider value={{ likedGenres, setLikedGenres }}>
      {children}
    </LikedGenresContext.Provider>
  );
};

export function useLikedGenresContext() {
  const context = useContext(LikedGenresContext);

  if (typeof context === 'undefined') {
    throw new Error(
      'useLikedGenresContext must be used within a LikedGenresProvider'
    );
  }
  return context;
}
