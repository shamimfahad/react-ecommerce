import styled from 'styled-components';

export const ContactPageContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    height: calc(100vh - 100px);
    justify-content: center;
    align-items: center;
  }
`;

export const ContactHeader = styled.h2`
  color: #555;
`;

export const ContactEmail = styled.p`
  color: #000;
`;

export const Namespan = styled.span`
  color: salmon;
`;

export const Link = styled.a`
  color: salmon;
`;
