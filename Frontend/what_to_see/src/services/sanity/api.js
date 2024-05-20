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

export const fetchUsersData = async ({ username }) => {
  try {
    // Fetch user by username
    const userQuery = `*[_type == "user" && username == "${username}"]{
      username,
      favoriteFilms[]->{
        _id,
        title
      },
      favoriteGenres[]->{
        _id,
        name
      }
    }`;
    const userData = await client.fetch(userQuery);
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};



