import React from 'react';
import Movie from './Movie';

const MovieViewsRealtime = ({ title, releaseDate, views }) => {
  console.log(`Rendering MovieViewsRealtime: ${title}`);
  return (
    <div>
      <Movie title={title} releaseDate={releaseDate} />
      <p>Movie views: {views}</p>
    </div>
  );
};

export default MovieViewsRealtime;