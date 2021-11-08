import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import jsonPlaceholder from '../apis/jsonPlaceholder';
import './CreatePost.scss'

const CreatePost = () => {

  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [post, setPost] = useState('');


  const onSubmit = event => {
    event.preventDefault();
    // console.log(userId, title, body);
    jsonPlaceholder.post('/users', { userId, title, body })
      .then(res => {
        setPost(res.data);
        // console.log(res.data);
        navigate("/new/", { state: res.data });
        // console.log(res.data)

      })
      .catch(err => console.log(err));
  }

  // console.log(post);

  return (
    <div className='form-container'>
      <h1>Enter article data</h1>
      <form action="" onSubmit={onSubmit} >
        <div className='mb-3'>
          <label htmlFor="userId" className='form-label'>User Id</label>
          <input
            type="text"
            name="userId"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className='form-control' />
        </div>
        <div className='mb-3'>
          <label htmlFor="title" className='form-label'>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='form-control' />
        </div>
        <div className='mb-3'>
          <label htmlFor="body" className='form-label'>Text</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className='form-control'>
          </textarea>
        </div>
        <button type='submit' className='btn btn-primary'>Create new article</button>
        <div>
          <Link to='/' className='btn btn-light link'>Go back</Link>
        </div>
      </form>
      <div>
        {post.title}
      </div>
    </div>
  )
}

export default CreatePost
