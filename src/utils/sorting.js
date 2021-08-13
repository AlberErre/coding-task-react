export const sortAlphabetically = (a, b) => {
  if (a.title > b.title) {
    return 1;
  }

  if (a.title < b.title) {
    return -1;
  }

  return 0;
};

export const sortByShowsNumber = (a, b) => {
  if (a.numShows > b.numShows) {
    return -1;
  }

  if (a.numShows < b.numShows) {
    return 1;
  }

  return 0;
};
