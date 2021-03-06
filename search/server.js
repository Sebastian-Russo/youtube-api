require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const chalk = require('chalk');
const { google } = require('googleapis');
const youtube = google.youtube('v3'); // initialize the Youtube API library 


// Middleware 
app.use(cors());
app.use(bodyParser.json());


// // CORS
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type,multipart/form-data,Authorization');
//   res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
//   if (req.method === 'OPTIONS') {
//     return res.send(204);
//   }
//   next();
// });

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



// exports need to be above routes, so it can get reference to it
/******************** EXPORTS  *********************/ 
module.exports = { fetchYoutubePlaylist, fetchYoutubeSearch }



/******************** ROUTES  *********************/ 

const getRouter = require('./routes/get');
const postRouter = require('./routes/post');

app.use('/videos', getRouter);
app.use('/videos', postRouter);


app.use('*', (req, res) => {
  return res.status(404).json({ message: 'Not Found, backend' });
});


/******************** LIST TO PORT  *********************/

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listing on port ${port}`));


