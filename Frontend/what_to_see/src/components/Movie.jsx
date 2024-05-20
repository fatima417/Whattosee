import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Movie = ({ movie }) => {
  const { id, titleText, primaryImage, releaseYear } = movie;

  return (
    <Box className="movie" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 4 }}>
      <Typography variant="h6">{titleText.text}</Typography>
      <Typography variant="body1">Release Year: {releaseYear.year}</Typography>
      {primaryImage && (
        <Box component="img" src={primaryImage.url} alt={titleText.text} sx={{ width: primaryImage.width, height: primaryImage.height, marginTop: 2 }} />
      )}
      <Button href={`https://www.imdb.com/title/${id}`}>See details</Button>
    </Box>
  );
};

export default Movie;
