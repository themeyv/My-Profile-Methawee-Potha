import React from 'react';

const Resume = () => {
  const resumeFilePath = 'src/assets/MethaweePothaResume.pdf';

  const openResume = () => {
    window.open(resumeFilePath,'');
  };

  return (
    <div>
      <button onClick={openResume}><a>Resume</a></button>
    </div>
  );
};

export default Resume;
