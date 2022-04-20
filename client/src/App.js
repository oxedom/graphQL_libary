import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost';
//Comps
import BookList from "./comps/BookList";

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql'})

function App() {
  return (
      <ApolloProvider client={client}>
      <div id="main">
        <BookList></BookList>
      </div>
      // </ApolloProvider>
  );
}

export default App;
