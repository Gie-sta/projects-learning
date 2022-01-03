import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import jsonPlaceholder from '../apis/jsonPlaceholder';

import Posts from './Posts/Posts';
import Pagination from './Pagination/Pagination';

import './ListPage.scss';



const ListPage = () => {

  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(location.state ? location.state.page : 1);
  const postsPerPage = 10;
  // const page = location.state.page;
  const [page, setPage] = useState(location.state ? location.state.page : currentPage)
  console.log(currentPage);
  // 
  //get posts from api
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const fetchedPosts = await jsonPlaceholder.get('/posts');
      setPosts(fetchedPosts.data);
      setLoading(false);
    };
    fetchData();
  }, [])
  // console.log(posts.length)

  //set current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPage(pageNumber);
    // Window.history.replaceState(null, '');
  }


  //set current page

  return (
    <div className='list-container'>
      <h1>All posts</h1>
      <Link className='btn btn-success' to='/create'>Create new post</Link>

      <Posts
        posts={currentPosts}
        loading={loading}
        currentPage={currentPage}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />


    </div >
  )
}

export default ListPage
