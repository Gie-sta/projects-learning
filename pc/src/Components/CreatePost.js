import React, { useState } from 'react';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {

  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [post, setPost] = useState('');
  const navigate = useNavigate();


  const onSubmit = event => {
    event.preventDefault();
    console.log(userId, title, body);
    axios.post(`https://jsonplaceholder.typicode.com/users`, { userId, title, body })
      .then(res => {
        // const postedData = res.data;
        // console.log(postedData);
        setPost(res.data);
        console.log(res.data);
        navigate("/new/", { state: res.data });
        // console.log(res.data)

      })
      .catch(err => console.log(err));
  }


  console.log(post);



  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <div>
          <label htmlFor="userId">User Id</label>
          <input
            type="text"
            name="userId"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <label htmlFor="body">Text</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}>
          </textarea>
        </div>
        <button type='submit'>Submit</button>

        {/* <Link to='/new'
          state={{ state: post }}
        >
        </Link> */}
      </form>

      <div>
        {post.title}
      </div>
    </div>
  )
}

export default CreatePost
