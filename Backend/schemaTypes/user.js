// schemas/user.js
export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      { name: 'username', type: 'string', title: 'Username' },
      { name: 'favoriteFilms', type: 'array', of: [{ type: 'reference', to: [{ type: 'film' }] }], title: 'Favorite Films' },
      { name: 'favoriteGenres', type: 'array', of: [{ type: 'reference', to: [{ type: 'genre' }] }], title: 'Favorite Genres' },
      
    ]
  };
