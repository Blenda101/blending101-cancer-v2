import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { filtersVar } from "./store";

const API_URL = "https://infographic-production.up.railway.app/graphql";

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        filters: {
          read() {
            return filtersVar();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: API_URL,
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

export default client;
