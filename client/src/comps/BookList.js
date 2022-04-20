import { gql, useQuery } from '@apollo/client';

const getBookQuery = gql`
    {
        books {
            name
            id
        }
    }
`

function BookList() {

    const { loading, error, data } = useQuery(getBookQuery);

    console.log(data);

    if(loading) return <p>Loading....</p>

    if(error) return <p>Ops! Something went wrong</p>

    return (
        <>
            <h1>All good, got'em Data!</h1>
        </>
    )
}

export default BookList;