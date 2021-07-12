import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ArticlesList from './ArticlesList';
import gNews from '../apis/gNews';


const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);



  const fetchArticles = async (searchTerm) => {
    setError(false);
    try {
      const result = await gNews.get('/search', {
        params: {
          q: searchTerm,
        }
      });
      setArticles(result.data.articles);
    } catch (error) {
      setError(true);
    }
  };


  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };



  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(searchTerm);

    fetchArticles(searchTerm);
    axios
      .post('http://localhost:5000/log', { searchTerm })
      .then(() => console.log(`SearchTerm Created ${ searchTerm }`))
      .catch(err => {
        console.error(err);
      });
    setSearchTerm('');
  };

  return (
    <div className='container'>
      <SearchBar
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        searchTerm={searchTerm}
        error={error} />
      <ArticlesList
        articles={articles}
        searchTerm={searchTerm}
      />
    </div>
  )

};

export default App;