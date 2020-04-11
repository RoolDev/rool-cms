/**
 * Dependencies
 */
import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  {
    articles(sort: "id:desc", limit: 5) {
      header
      subheader
      created_at
      thumbnailURL
      slug
    }
  }
`;
