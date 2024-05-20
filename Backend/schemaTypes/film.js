export default {
    name: 'film',
    title: 'Film',
    type: 'document',
    fields: [
      { name: 'title', type: 'string', title: 'Title' },
      { name: 'imdbId', type: 'string', title: 'IMDB ID' },
      { name: 'genre', type: 'reference', to: [{ type: 'genre' }], title: 'Genre' },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'releaseDate', type: 'date', title: 'Release Date' },
      // Add other relevant fields
    ]
  };