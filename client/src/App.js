import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
//Comps
import BookList from "./comps/BookList";

const client = new ApolloClient({uri: 'http://localhost:4000/graphql',  cache: new InMemoryCache()})

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
