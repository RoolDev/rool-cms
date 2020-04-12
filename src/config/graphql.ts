import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import config from './config';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: config.articlesGQL.url,
  }),
});
