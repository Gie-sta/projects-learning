import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListPage from './ListPage';
import PostPage from './PostPage';
import NewPost from './NewPost';
import CreatePost from './CreatePost';
import jsonPlaceholder from '../apis/jsonPlaceholder';

const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await jsonPlaceholder.get('/posts');
      setPosts(fetchedPosts.data);
    };
    fetchData();
  }, [setPosts])
  // console.log(posts)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListPage posts={posts} />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/new' element={<NewPost />} />
        <Route path='/create' element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
