import { gql, useMutation } from '@apollo/client';
import client from '../../apolloClient';

const createMovieMutation = gql`
  mutation createMovie($title: String!, $category: String!, $year: Int!) {
    createMovie(title: $title, category: $category, year: $year) {
      id
      title
      year
      category
      picture
    }
  }
`;

export const useCreateMovie = () => {
  const [createMovie, { data, loading, error }] = useMutation(
    createMovieMutation,
    { client: client }
  );

  return {
    createMovie,
    data,
    loading,
    error,
  };
};
