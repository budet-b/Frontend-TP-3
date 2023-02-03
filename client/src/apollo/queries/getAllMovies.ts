import { gql } from "@apollo/client";

export const getAllMoviesQuery = gql`
  query GetAllMovies {
    getAllMovies {
      title
      year
      category
      picture
      id
    }
  }
`;
