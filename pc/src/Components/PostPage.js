
import React, { useEffect, useState } from 'react';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import { useLocation, Link } from 'react-router-dom'

import './PostPage.scss'

const PostPage = () => {
  const location = useLocation();
  const id = location.state.id;
  const userID = location.state.userID;

  const [post, setPost] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchPostData = async () => {
      const fetchedPost = await jsonPlaceholder.get(`/posts/${ id }`);
      setPost(fetchedPost.data);
    };
    fetchPostData();
  }, [id])

  useEffect(() => {
    const fetchUserData = async () => {
      const fetchedUser = await jsonPlaceholder.get(`/users/${ userID }`);
      // console.log(fetchedUser.data)
      setUser(fetchedUser.data);
    };
    fetchUserData();
  }, [userID])

  // console.log(post);
  // console.log(user);

  return (
    <div className='new-post-container'>
      <h1>Post details</h1>
      <div className="card ">
        <div className="card-header">
          <h5> User id:{post.userId}</h5>
          <div className='btn btn-secondary user-span'>Wiev user info</div>
          <ul className='user-info-container'>
            <li>Username: {user.username}</li>
            <li>name: {user.name}</li>
            <li>email: {user.email}</li>
            <li>phone: {user.phone}</li>
            <li>website: {user.website}</li>
          </ul>
        </div>
        <h5 className="card-header">Post id:{post.id}</h5>
        <div className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <p className="card-text">{post.body}</p>
          <Link to='/' className="btn btn-secondary ">Go to all post</Link>
        </div>
      </div>
    </div>
  )

}

export default PostPage
