import { ApolloProvider } from "@apollo/client";
import client from "../graphql/apollo";
import '../styles/globals.css'
import "../scss/styles.scss";

function MyApp({ Component, pageProps }) {
  return(
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  ) 
}

export default MyApp
