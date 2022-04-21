import { gql, useQuery } from '@apollo/client';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`

const AddBook = () => {


const { loading, error, data } = useQuery(getAuthorsQuery);
console.log(data)
// const authors = data.authors
 
    return ( <form> 
        
        <select name="" id="author">
              { authors.map(el => <option key={el.id}> {el.name} </option>) }
             </select>
         </form>  );
}
 
export default AddBook ;