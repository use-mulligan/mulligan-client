import ApolloClient from "apollo-boost";
/**
 * NOTE: If using real device through USB for development
 * set 'uri' to the IPV4 address of your server/localhost (your computer)
 * to allow network calls within your private network.
 */
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  // credentials: 'same-origin',
});

export default client;