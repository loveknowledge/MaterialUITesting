import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

//import Apollo
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


// creat connection between Apollo and GraphQL API
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
serviceWorker.unregister();