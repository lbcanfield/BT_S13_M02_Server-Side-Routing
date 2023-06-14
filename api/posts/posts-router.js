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




module.exports = router;