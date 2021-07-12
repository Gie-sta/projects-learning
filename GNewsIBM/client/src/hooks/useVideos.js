import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm)
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        max: 9,
        token: '1914610dad389bec6f372865e57938d6'
      },
    });

    setVideos(response.data.articles);
  };

  return [videos, search];
};

export default useVideos;
