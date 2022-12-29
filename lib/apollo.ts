import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clbtfxqqh20d301ufcp13cn8o/master",
  cache: new InMemoryCache()
})