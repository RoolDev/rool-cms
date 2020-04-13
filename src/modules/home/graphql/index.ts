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

export const GET_LATEST_ARTICLE = gql`
  {
    articles(sort: "id:desc", limit: 1) {
      header
      subheader
      created_at
      thumbnailURL
      slug
      content
      authorName
      category
    }
  }
`;

export const GET_ARTICLE_BY_SLUG = gql`
  query articles($slug: String!) {
    articles(where: { slug: $slug }) {
      header
      subheader
      created_at
      thumbnailURL
      slug
      content
      authorName
      category
    }
  }
`;

export const GET_ARTICLES_LIST = gql`
  {
    articles(sort: "id:desc") {
      header
      created_at
      slug
    }
  }
`;
