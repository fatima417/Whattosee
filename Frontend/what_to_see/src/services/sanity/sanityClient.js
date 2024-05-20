import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '6qbaqz5z',
  dataset: 'production', 
  useCdn: false // `false` if you want to ensure fresh data
});
