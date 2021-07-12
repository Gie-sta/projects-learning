import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ArticlesList from './ArticlesList';
import useArticles from '../hooks/useArticles';


const App = () => {

  const [articles, search] = useArticles('cats')


  console.log(articles)





  return (
    <div>
      <SearchBar
        onFormSubmit={search} />
      <div>

        <ArticlesList />
      </div>
    </div>
  )
};

export default App;