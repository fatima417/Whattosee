import client from './sanityClient';

export const fetchFilms = async () => {
  const films = await client.fetch(`*[_type == "film"]{..., genre->}`);
  return films;
};

export const fetchGenres = async () => {
  const genres = await client.fetch(`*[_type == "genre"]`);
  return genres;
};

export const fetchUsers = async () => {
  const users = await client.fetch(`*[_type == "user"].username`);
  return users;
};
