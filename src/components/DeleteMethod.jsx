import React, { useEffect, useState } from 'react'


function DeleteMethod() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        patch()
    }, [])

    const patch = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts/1'
        try {
            const response = await fetch(url,
                {
                    method: 'DELETE',
                }
            )
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json()
            setData(result)
        } catch (error) {
            throw new Error("error there is error", error).message;
        }
        finally {
            setLoading(false);
        }
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1 style={{ margin: '25px' }} >Delete Method</h1> <br />
            <h6>Data from Api   </h6> <br />
            <p>Id :- 1</p>
            <p>UserID :- 1</p>
            <p>Title :- sunt aut facere repellat provident occaecati excepturi optio reprehenderit</p>
            <p>Body :- quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto</p>
            <br />
            <h6>Updated Data  </h6> <br />
            <p>none</p>
        </div>
    )
}

export default DeleteMethod
