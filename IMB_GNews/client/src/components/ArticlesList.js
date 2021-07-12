import ArticleCard from "./ArticalCard";

const ArticlesList = ({ articles, }) => {

  const showArticles = (articles) => {
    if (articles.length === 0) {
      return <h4 className='display-header text-center text-secondary mt-5'>Articles on a topic of your search keywords will be displayed here. </h4>
    } else {
      return (
        <ul className="row" >
          {articles.map((article) => {
            return <ArticleCard article={article} key={article.url} />;
          })}
        </ul>
      )
    }
  }

  return (
    <div >
      {showArticles(articles)}
    </div>
  );
};


export default ArticlesList;
