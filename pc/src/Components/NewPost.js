import React from 'react'
import { useLocation } from 'react-router-dom'

const NewPost = () => {

  let location = useLocation();
  const post = location.state;

  return (
    <div>
      Title: {post.title}
    </div>
  )
}

export default NewPost
