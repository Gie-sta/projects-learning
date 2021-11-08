import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import jsonPlaceholder from '../apis/jsonPlaceholder';
import { useNavigate } from "react-router-dom";





const ListPage = ({ posts }) => {
  console.log(posts);
  const [postID, setPostID] = useState('');

  console.log(postID);

  const ButtonClick = (post) => {
    // console.log(post.id);
    const id = post.id
    setPostID(id);
    // console.log(postID);
  }



  // useEffect(() => {
  //   const fetcPostData = async () => {
  //     const fetchedPostData = await jsonPlaceholder.get('/posts/{postID}');
  //     setFetchedPost(fetchedPostsData);
  //   };
  //   fetchPostData();
  // }, [setFetchedPosts])




  return (
    <div>
      <ul>
        {posts &&
          posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>user {post.userId}</p>
              {/* <Link to={post.id} >Read article</Link> */}
              <button onClick={() => ButtonClick(post)}>button</button>

            </li>
          ))}
      </ul>
      <Link to='/create'>New article</Link>
    </div >
  )
}

export default ListPage
