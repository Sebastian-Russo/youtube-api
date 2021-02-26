Backend
· Develop an API that consumes the YouTube API to consult videos of a channel of your choosing (please pick a channel with more than 12 videos)
· The API you build must be able to handle paging parameters such as the quantity of results requested and page numbers
· The API must also be able to receive a word or phrase to look for videos within the selected YouTube channel
· If the API does not receive any parameters it must return 12 results (videos)
· The format of the results must be JSON
· Please develop this is Node.js

Frontend
· Please develop a frontend that consumes the API you built to list the videos searched for
· The page must show a search box that allows a user to look for videos
· When a search is executed the results must be shown in a grid. The page must not reload entirely, only the grid should reload.
· The default of the site must show the 12 most recent videos of the channel. When clicked a video must play in a modal
· The video listing must show a video’s thumbnail, title, and description
· The page must show the videos in three columns by default, and give users the option of seeing a fourth column
· The video listings must have different pages, so you can navigate through the totality of search results
· Your implementation must be responsive, so that it displays correctly in a desktop or mobile environment
· You may use Vue.js or React.js to develop this

## What I learned, probelms I faced

Finding a youtube channels ID
https://commentpicker.com/youtube-channel-id.php
FluffeeTalks Channel ID: UCBh8XcZST_JTHt-IZDxT_pQ
Realised it's better to use the youtube.search, channelID as a param

Rest Client is a great new extension that's help me test my http requests
