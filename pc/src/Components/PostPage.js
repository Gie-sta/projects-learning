
import React, { useEffect, useState } from 'react';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import { useLocation } from 'react-router-dom'





const PostPage = () => {
  let location = useLocation();
  const id = location.state.id
  console.log(id);


  const [post, setPost] = useState('');

  useEffect(() => {
    const fetchPostData = async () => {
      const fetchedPost = await jsonPlaceholder.get(`/posts/${ id }`);
      setPost(fetchedPost.data);
    };
    fetchPostData();
  }, [setPost])

  console.log(post)

  return (
    <div>
      Post title: {post.title}
    </div>
  )
}

export default PostPage
