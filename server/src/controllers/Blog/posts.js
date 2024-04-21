const mongoose = require("mongoose");
const path = require("node:path");
// const db = require("./src/db")
const BlogModel = require("../../db/models/Blog");
// const posts = require("../../db/models/Blog/posts");
var kebabCase = require('lodash.kebabcase');
const express = require("express");
const app = express();
// const [data, setData] = useState("");
// const { default: slugify } = require("slugify");
// require(slugify)
const slugify = require("slugify")



exports.getPosts = async (req, res, next) => {
    BlogModel.find().sort().exec()
        .then(result => res.json(result))
        // console.dir(result)
        .catch(err => res.json(err));

};

exports.createPost = async (req, res, next) => {
    const post = req.body;
    // console.dir(post);
    const newPost = new BlogModel(post);
    await newPost.save();

    res.json(post);

};

exports.postFilter = async (req, res, next) => {

  await  BlogModel.findById(req.params._id).exec()
  .then(result => res.json(result))
    .catch(err => res.status(404).json({ nopostfound: 'No Posts found' }));

};



exports.createFetch = async (req, res, next) => {
    const post = req.body;
    // console.dir(post);
    const newPost = new BlogModel(post);
    await newPost.save();

    res.json(post);
    res.json({ message: "Post added successfully!✅" });

};
// const _id = () => Math.random().toString(36).substring(2, 10);

exports.newPost = async (req, res, next) => {
    const post = req.body;
    // const _id = () => Math.random().toString(36).substring(2, 10);
    // console.dir(_id);
    //   const  _id = generateID
    // console.dir(_id);
    // console.dir(post);
    const newPost = new BlogModel(post);
    await newPost.save();

    res.json(post);

};


exports.getPost = async (req, res, next) => {
    // BlogModel.findById(req.params.id).exec()
    //     .then(result => res.json(result))
    //     .catch(err => res.json(err));
};

exports.putPost = async (req, res, next) => {
    BlogModel.findByIdAndUpdate(req.params.id, { _id, title, author, content, },).exec()
        .then(result => res.json(result))
        .catch(err => res.json(err));
};

exports.deletePost = async (req, res, next) => {
    BlogModel.deleteOne({ _id: req.params.id }).exec()
        .then(result => res.json(result))
        .catch(err => res.json(err));
};   