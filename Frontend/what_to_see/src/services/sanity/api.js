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


const createGenre = async (name) => {
  try {
    // Create the new genre document
    const genre = await client.create({
      _type: 'genre',
      name: name
    });

    return genre;
  } catch (error) {
    console.error('Error creating genre:', error);
    throw error;
  }
};

// Function to add a genre to a user's favorite genres
export const addFavoriteGenreToUser = async (genreName) => {
  try {

    const genre = await createGenre(genreName)
    const usernmae  = localStorage.getItem('username');
    // Fetch the user document by username
    const userQuery = `*[_type == "user" && username == $username][0]`;
    const user = await client.fetch(userQuery, { username });

    if (!user) {
      throw new Error(`User with username ${username} not found`);
    }

    // Update the user document to add the genre reference
    const updatedUser = await client.patch(user._id)
      .setIfMissing({ favoriteGenres: [] }) // Ensure favoriteGenres array exists
      .append('favoriteGenres', [{ _type: 'reference', _ref: genreId }]) // Add the genre reference to favoriteGenres
      .commit();

    return updatedUser;
  } catch (error) {
    console.error('Error adding favorite genre to user:', error);
    throw error;
  }
};

