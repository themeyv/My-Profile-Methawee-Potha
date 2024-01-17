import React from 'react';

const Resume = () => {
  const resumeWebsiteUrl = 'https://www.canva.com/design/DAFrhmK6DGE/rqmLtkxR6Kp_cHaPDmjF8w/edit?utm_content=DAFrhmK6DGE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
  return (
    <button>
      <a href={resumeWebsiteUrl} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </button>
  );
};

export default Resume;

