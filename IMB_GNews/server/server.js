const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const ArticleSearchTerm = require('./models/searchTerm');
const ArticleClicked = require('./models/articleClicked');
const fs = require('fs');
const app = express();


mongoose.connect('mongodb://localhost:27017/terms', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
  })
  .catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
  })


app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let terms = [];
let articles = [];

app.post('/log', async (req, res) => {
  const term = { searchTerm: req.body.searchTerm };
  console.log(term);
  const newSearchTerm = new ArticleSearchTerm(term);
  await newSearchTerm.save()
  terms.push(term);
  const content = JSON.stringify(term);
  fs.appendFile('./log.txt', content, err => {
    if (err) {
      console.error(err)
      return
    }
  })
  console.log(terms)
  res.send(terms)
});

app.post('/logArticles', async (req, res) => {
  const newArticle = req.body.article;
  console.log(newArticle);
  const newArticleClicked = new ArticleClicked(newArticle);
  await newArticleClicked.save()

  const content = JSON.stringify(newArticle);
  fs.appendFile('./log.txt', content, err => {
    if (err) {
      console.error(err)
      return
    }
  })
  articles.push(newArticle);
  console.log(articles);
  res.send(articles)
});


//startserver on port 5000
app.listen(5000, () => {
  console.log('Server Listening on port 5000');
});
