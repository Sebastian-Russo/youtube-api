require('dotenv').config();
const { google } = require('googleapis');

// initialize the Youtube API library 
const youtube = google.youtube('v3');

const fetchYoutube = async () => {
  const {data} = await youtube.channels.list({
    key: process.env.YOUTUBE_API_TOKEN,
    part: 'snippet',
    id: 'UCBh8XcZST_JTHt-IZDxT_pQ'
  })
  const items = data.items.map(item => item.snippet)
  console.log(items)
}

fetchYoutube()