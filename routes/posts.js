const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { updateOne } = require('../models/Post');

//Gets all posts back
router.get('/', async (req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts)
  }catch(err){
    res.json({ message: err }) 
  }
});

router.get('/test', (req, res) => {
  res.send('We are on test!');
});

//Submits a post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try{
    const savedPost = await post.save()
    res.json(savedPost)
  }catch(err){ 
    res.json({ message: err })
  }
  })

//Get back a specific post 
router.get('/:postId ', async (req, res) => {
  try{
    const post =  await Post.findById(req.params.postId)
    res.json(post)
  }catch(err){
    res.json({ message: err })
  }
});

//Delete specific post
router.delete('/:postId', async (req, res) => {
  try{
    const removedPost = await Post.remove({ _id: req.params.postId});
    res.json(removedPost);
  }catch(err){
    res.json({ message: err })
  }
})

//Updating a post
router.patch('/:postId', async (req, res)=> {
  try{
    const updatedPost = await Post.updateOne({ _id: req.params.postId}, { $set: { title: req.body.title }});
    res.json(updatedPost)
  }catch(err){
    res.json({ message: err })
  }
})

module.exports = router;