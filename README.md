## What I learned, probelms I faced, tools I used

Finding a youtube channels ID
https://commentpicker.com/youtube-channel-id.php
FluffeeTalks Channel ID: UCBh8XcZST_JTHt-IZDxT_pQ
Realised it's better to use the youtube.search, channelID as a param

"Rest Client" is a great new extension that's help me test my http requests

Learned to paginate request on the backend, realized it was better in this case on the front end.

Added a responsive react player for youtube videos

Added frontend pagination. It was in the backend first, but due to the limited amount of requests youtube API allowed, I reasoned fetching the max results of 50 at once on the backend, then to the front end, and handling the pagination from there. The other factor was the since it's a relativelty low number of 50 items, it'd be better to handle on the frontend verus 1000 items or so.

Added dynamic routing

Biggest issue, youtube API really limits you, and if I were to move forward with this project further, I'd want to optimize the calls it makes.
