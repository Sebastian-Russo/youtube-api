const express = require('express');
const router = express.Router();
const api = require('../server.js');

console.log('API', api)

router.get('/', async (req, res) => {
  const results = await api.fetchYoutubePlaylist();
  res.json(results)
})

module.exports = { router }; 