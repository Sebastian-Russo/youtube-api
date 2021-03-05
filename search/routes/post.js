const express = require('express');
const router = express.Router();
const api = require('../server.js')

router.post('/', async (req, res) => {
  console.log('POST QUERY',req.body)
  const query = req.body
  res.body = await api.fetchYoutubeSearch(query)
  console.log("RES POST", res.body)
  res.json(res.body) 
})

module.exports = router;