const express = require('express');
const router = express.Router();

const post = require('../controllers/Blog/posts');


// create data route
router.get('/api/getPosts', post.getPosts );
router.get('/api/getPost/:_id', post.getPost );
router.put('/api/putPost/:id', post.putPost );
router.delete('/api/deletePost/:id', post.deletePost );
router.post('/api/createPost', post.createPost);
router.post('/api/createFetch', post.createFetch);
router.post('/api/newPost', post.newPost);
// router.get('/api/postFilter/:slug/:_id', post.postFilter);
router.get('/api/postFilter/:_id', post.postFilter);




module.exports = router;