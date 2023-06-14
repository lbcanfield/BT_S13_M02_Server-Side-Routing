const express = require('express');
const router = express.Router();
const POSTS = require('./posts-model');

router.get('/', (request, response) => {
     POSTS.find()
          .then(allPosts => {
               response.status(200).json(allPosts)
          })
          .catch(error => {
               response.status(500).json({
                    message: "The posts information could not be retrieved"
               })
          })
})

router.get('/:id', async (request, response) => {
     const { id } = request.params;
     try {
          // throw new Error('booh');
          const fetchedPost = await POSTS.findById(id);
          fetchedPost ?
               response.status(200).json(fetchedPost) :
               response.status(404).json({
                    message: "The post with the specified ID does not exist"
               })
     }
     catch (error) {
          response.status(500).json({
               message: "The post information could not be retrieved"
          })
     }
})

router.post('/', async (request, response) => {
     const { title, contents } = request.body
     try {
          if (!title || !contents) {
               response.status(400).json({
                    message: "Please provide title and contents for the post"
               })
          }
          else {
               const newPost = await POSTS.insert({ title, contents });
               const svrReply = await POSTS.findById(newPost.id);
               response.status(201).json(svrReply)
          }
     }
     catch (error) {
          response.status(500).json({
               message: "There was an error while saving the post to the database"
          })
     }
})




module.exports = router;