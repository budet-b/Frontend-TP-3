import { gql } from '@apollo/client';

export const getMovie = gql`
  query GetMovie($id: String!) {
    getMovie(id: $id) {
      title
      year
      category
      picture
    }
  }
`;
