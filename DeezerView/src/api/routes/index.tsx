const artist = (v: string) => {
  return '/artist/' + v;
};

const search = (v: string) => {
  return '/search/' + v;
};

export {search, artist};
