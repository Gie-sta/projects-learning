const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const searchTermSchema = new Schema(
  {
    searchTerm: {
      type: String
    }
  });

const ArticleSearchTerm = mongoose.model("SearchTerm", searchTermSchema);
module.exports = ArticleSearchTerm;