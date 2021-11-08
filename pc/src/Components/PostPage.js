
import React, { useEffect, useState } from 'react';
import jsonPlaceholder from '../apis/jsonPlaceholder';





const PostPage = () => {

  const [post, setPost] = useState('');

  useEffect(() => {
    const fetchPostData = async () => {
      const fetchedPost = await jsonPlaceholder.get('/posts/55');
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
