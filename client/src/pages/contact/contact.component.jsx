import React from 'react';
import {
  ContactPageContainer,
  ContactHeader,
  Namespan,
  Link,
  ContactEmail,
} from './contact.styles';

const Contact = () => {
  return (
    <ContactPageContainer>
      <ContactHeader>
        This is a portfolio project created by <Namespan>Shamim Fahad</Namespan>
      </ContactHeader>
      <ContactEmail>
        Email:{' '}
        <Link
          href="mailto:shamimfahadshuvo@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          shamimfahadshuvo@gmail.com
        </Link>
      </ContactEmail>
    </ContactPageContainer>
  );
};

export default Contact;
