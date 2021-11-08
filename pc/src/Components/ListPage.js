import React from 'react';
import { Link } from 'react-router-dom';

import './ListPage.scss'


const ListPage = ({ posts }) => {
  // console.log(posts);

  return (
    <div className='list-container'>
      <h1>All posts</h1>
      <Link className='btn btn-secondary' to='/create'>Create new post</Link>
      <div className="row post-container title">
        <div className='col-1 post-id'>Post ID</div>
        <h5 className='col-8 post-title'>Post title</h5>
        <p className='col-1 post-user-id'>User Id</p>
        <div className='col-2 '>Read more</div>
      </div>
      {posts &&
        posts.map(post => (
          <div key={post.id}
            className='row post-container'>
            <div className='col-1 post-id'>{post.id}</div>
            <h5 className='col-8 post-title'>{post.title}</h5>
            <p className='col-1 post-user-id'>user: {post.userId}</p>
            <Link
              className='col-2 link-secondary'
              to={`/post/${ post.id }`}
              state={{ id: post.id, userID: post.userId }} >
              Article details
            </Link>
          </div>
        ))}
    </div >
  )
}

export default ListPage
