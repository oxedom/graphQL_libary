import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
const getBooksQuery = gql`
{
    books{
        name
        id
    }
}
`
const BookList = (props) => {

    console.log(props)
    return ( <div>
     <ul id="book-list">
         <li> book name </li>
     </ul>
    </div> );
}
 
export default graphql(getBooksQuery)(BookList);