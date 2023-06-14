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




module.exports = router;