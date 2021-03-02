require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const chalk = require('chalk');
const { google } = require('googleapis');
const youtube = google.youtube('v3'); // initialize the Youtube API library 

app.use(cors());
app.use(bodyParser.json());


/******************** FIRST YOUTUBE API CALL *********************/
const fetchYoutubePlaylist = async () => {
  try {
    const {data} = await youtube.playlistItems.list({
      key: process.env.YOUTUBE_API_TOKEN,
      part: ['snippet'],
      maxResults: 50,
      playlistId: "UUBh8XcZST_JTHt-IZDxT_pQ"
    })
    console.log(data)
    return data.items
  } catch(err) {
    console.log(chalk.red(err))
  }

}


/******************** SECOND YOUTUBE API CALL *********************/
const fetchYoutubeSearch = async ({query}) => {
  console.log(query)
  try {
    const {data} = await youtube.search.list({
      key: process.env.YOUTUBE_API_TOKEN,
      part: ['snippet'],
      q: query,
      channelId: 'UCBh8XcZST_JTHt-IZDxT_pQ',
      order: 'date',
      type: 'video',
      maxResults: 50
    })
    console.log('YOUTUBE SEARCH', data)
    return data.items
  } catch(err) {
    console.log(chalk.red(err))
  }
} 


/******************** GET REQUEST TO VIDEOS *********************/
app.get('/videos', async (req, res) => {
  const results = await fetchYoutubePlaylist();
  res.json(results)
})

/******************** POST REQUEST, USER SEARCH *********************/

app.post('/videos', async (req, res) => {
  console.log('POST QUERY',req.body)
  const query = req.body
  res.body = await fetchYoutubeSearch(query)
  console.log("RES POST", res.body)
  res.json(res.body) 
})





/******************** LIST TO PORT  *********************/

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listing on port ${port}`));

