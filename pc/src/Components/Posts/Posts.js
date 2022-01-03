import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts, loading, currentPage }) => {
  console.log(currentPage);

  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <div>


      <div className="row post-container title">
        <div className='col-1 post-id'>Post ID</div>
        <h5 className='col-8 post-title'>Post title</h5>
        <p className='col-1 post-user-id'>User Id</p>
        <div className='col-2 '>Read more</div>
      </div>
      <ul>
        {posts.map(post => (
          <li key={post.id}
            className='row post-container'>
            <div className='col-1 post-id'>{post.id}</div>
            <h5 className='col-8 post-title'>{post.title}</h5>
            <p className='col-1 post-user-id'>user: {post.userId}</p>
            <Link
              className='col-2 link-success'
              to={`/post/${ post.id }`}
              state={{ id: post.id, userID: post.userId, page: currentPage }} >
              Article details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
