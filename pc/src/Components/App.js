import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListPage from './ListPage';
import PostPage from './PostPage';
import NewPost from './NewPost';
import CreatePost from './CreatePost';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListPage />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/new' element={<NewPost />} />
        <Route path='/create' element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
