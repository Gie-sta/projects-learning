const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleClickedSchema = new Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String
    },
    content: {
      type: String
    },
    url: {
      type: String
    },
    image: {
      type: String
    },
    publishedAt: {
      type: String
    },
    source: {
      type: Object
    }
  });

const ArticleClicked = mongoose.model("Article", articleClickedSchema);
module.exports = ArticleClicked;