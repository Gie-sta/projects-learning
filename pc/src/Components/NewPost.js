import React from 'react'
import { useLocation, Link } from 'react-router-dom';

import './NewPost.scss';

const NewPost = () => {

  let location = useLocation();

  const post = location.state;

  return (
    <div className='new-post-container'>
      <h1>This is new created post</h1>
      <div className="card ">
        <h5 className="card-header">User id:{post.userId}</h5>
        <h5 className="card-header">Post id:{post.id}</h5>
        <div className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <p className="card-text">{post.body}</p>
          <Link to='/' className="btn btn-secondary link ">Go to all post</Link>
          <Link to='/create' className="btn btn-success ">Create another post</Link>

        </div>
      </div>
    </div>
  )
}

export default NewPost
