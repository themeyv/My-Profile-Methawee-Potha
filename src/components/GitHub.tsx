import React from 'react';

const GitHub = () => {
  const externalWebsiteUrl = 'https://github.com/themeyv';

  return (
    <button>
      <a href={externalWebsiteUrl} target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </button>
  );
};

export default GitHub;
