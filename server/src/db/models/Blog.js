const mongoose = require("mongoose");
const slugify = require("slugify")

const BlogSchema = new mongoose.Schema({
  _id: {
    type: String,
    unique: false,

      },
        
  title: {
    type: String,
    sparse: true,
    unique: false,
  },
  slug: {
      type: String,
      // required: [false, "Please provide a title"],
      unique: false,
      // minlength: [4, "Please provide a title least 4 characters "],
  },


  content: {
    type: String,
    unique: false,
  },
  author: {
    type: String,
    unique: false,
  },
  date: {
    type: Date,
sparse: true,
  
  },
  tag : {
    typr: String,
  },
  category: {
    type: String,
  }
});

const BlogModel = mongoose.model("post", BlogSchema);
module.exports = BlogModel;
