require('dotenv').config();
const express = require('express');
const app = express();
const chalk = require('chalk');
const { google } = require('googleapis');
const youtube = google.youtube('v3'); // initialize the Youtube API library 


/******************** YOUTUBE API CALL *********************/
const fetchYoutubeSearch = async () => {
  try {

    const {data} = await youtube.search.list({
      key: process.env.YOUTUBE_API_TOKEN,
      part: 'snippet',
      maxResults: 50, 
      'q': 'FluffeeTalks',
      channelId: 'UCBh8XcZST_JTHt-IZDxT_pQ',
      order: 'date',
      type: 'video'
    })
    
    data.items.map(item => videos.push(item.snippet))
    
  } catch(err) {
    console.log(chalk.red(err))
  }
}
fetchYoutubeSearch();

/******************** DATA FROM CALL *********************/
let videos = [] // not getting filled before http request
console.log(chalk.yellow('videos global', videos[0]))


/******************** GET REQUEST TO VIDEOS *********************/
app.get('/videos', paginatedResults(videos), (req, res) => {
  
  console.log(chalk.yellow('REQUEST', req))

  res.json(res.paginatedResults)
  console.log(chalk.blue(res.paginatedResults))
})

/******************** PAGINATE RESULTS *********************/
function paginatedResults(model) {
  console.log(chalk.yellow('HERE',model))
  return (req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
  
    // num of pages * amount per page, limit ==> gets the different fromt start and end of that page 
    const startIndex = (page -1) * limit
    const endIndex = page * limit 
  
    const results = {}
  
    if (endIndex < model.length) {
      results.next = {
        page: page + 1,
        limit: limit
      }
    }
      
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }
  
    results.results = model.slice(startIndex, endIndex)
    // save to response 
    res.paginatedResults = results 
    next()
  }
}




/******************** LIST TO PORT  *********************/

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listing on port ${port}`));