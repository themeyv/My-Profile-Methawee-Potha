

  import React from 'react';

const ContactMe = () => {
  const email = 'themeyv@gmail.com';
  const subject = 'Subject of the email';
  const body = 'Body of the email';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div>
      <p>Contact me : <a href={mailtoLink}>{email}</a></p>
      
    </div>
  );
};

export default ContactMe;
