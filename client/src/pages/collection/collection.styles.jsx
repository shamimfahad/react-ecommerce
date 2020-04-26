import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 760px) {
    display: grid;
  }
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    padding: 0px 20px;
    & > div {
      margin-bottom: 15px;
    }
  }
`;