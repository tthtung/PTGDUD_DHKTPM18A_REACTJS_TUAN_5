import React from 'react';

const Movie = ({ title, releaseDate }) => {
  console.log(`Rendering Movie: ${title}`);
  return (
    <div>
      <h2>{title}</h2>
      <p>Release Date: {releaseDate}</p>
    </div>
  );
};

export default React.memo(Movie);