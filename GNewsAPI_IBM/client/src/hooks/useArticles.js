import { useState, useEffect } from "react";
import gNews from "../components/Apis/gNews";

const useArticles = (defaultSearchTerm) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm)
  }, [defaultSearchTerm]);

  const search = async (searchTerm) => {
    const response = await gNews.get('/search', {
      params: {
        q: searchTerm,
      },
    });
    setArticles(response.data.articles)
  };

  return [articles, search]

}

export default useArticles;