import axios from 'axios';
import './ArticalCard.css'

const ArticleCard = ({ article }) => {

  const onCardClick = (url) => {
    if (article) {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    axios
      .post('http://localhost:5000/logArticles', { article })
      .then(() => console.log(`Artical clicked : ${ article.title }`))
      .catch(err => {
        console.error(err);
      });
  }

  const truncateWithEllipses = (text, max) => {
    return text.substr(0, max - 1) + (text.length > max ? '\u2026' : '');
  }


  return (
    <div className='col-12 col-sm-6 col-md-4'>
      <li className='card h-100'>
        <img className='card-img-top img-fluid'
          alt={article.title}
          src={article.image}
        />
        <div className="card-body d-flex flex-column">
          <p className='card-subtitle'>{article.publishedAt}</p>
          <h3 className='card-title'>{article.title}</h3>
          <p>{truncateWithEllipses(article.description, 200)}</p>
          <button type='button' className="btn btn-primary " onClick={() => onCardClick(article.url)} >Read article</button>
        </div>
      </li>
    </div>
  );
};

export default ArticleCard;