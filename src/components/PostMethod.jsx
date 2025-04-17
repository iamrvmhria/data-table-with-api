import React, { useEffect, useState } from 'react';

function PostMethod() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    sendPost();
  }, []);

  const sendPost = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          title: 'Name',
          body: 'Ravindra',
          userId: 1212,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setPost(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Posted Item</h2>
      <table className="table table-bordered my-3">
        <thead>
          <tr>
            <th scope="col">#Id</th>
            <th scope="col">UserId</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{post.id}</th>
            <td>{post.userId}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default PostMethod;
