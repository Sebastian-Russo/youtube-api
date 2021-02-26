import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Search } from './search';
import { Results } from './results';
import { Episode } from './episode';


function App() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [items, setItems] = useState('');
  const [episode, setEpisode] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get('http://localhost:3001/videos?page=1&limit=50')
        console.log(data)
        setItems(data.data)
      } catch(err) {
        console.error(err)
      }
    }
    // fetchData()
  }, [query])


  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault()
    setQuery(input)
  }

  const handleClickEpisode = (e,item) => {
    setEpisode(item)
  }

  return (
    <div className="App">
      <Search input={input} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Results items={data} handleClickEpisode={handleClickEpisode} />
      <Episode item={episode} />
    </div>
  );
}

export default App;


const data = [
  {
    "next": {
    "page": 2,
    "limit": 3
    },
    "results": [
    {
    "publishedAt": "2021-02-24T19:59:10Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "Worlds Worst Tattoos! #125",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
    "default": {
    "url": "https://i.ytimg.com/vi/dAFtzlsE6E8/default.jpg",
    "width": 120,
    "height": 90
    },
    "medium": {
    "url": "https://i.ytimg.com/vi/dAFtzlsE6E8/mqdefault.jpg",
    "width": 320,
    "height": 180
    },
    "high": {
    "url": "https://i.ytimg.com/vi/dAFtzlsE6E8/hqdefault.jpg",
    "width": 480,
    "height": 360
    }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2021-02-24T19:59:10Z"
    },
    {
    "publishedAt": "2021-02-19T19:50:31Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at TikTok!",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
    "default": {
    "url": "https://i.ytimg.com/vi/Eg_cGZTT1no/default.jpg",
    "width": 120,
    "height": 90
    },
    "medium": {
    "url": "https://i.ytimg.com/vi/Eg_cGZTT1no/mqdefault.jpg",
    "width": 320,
    "height": 180
    },
    "high": {
    "url": "https://i.ytimg.com/vi/Eg_cGZTT1no/hqdefault.jpg",
    "width": 480,
    "height": 360
    }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2021-02-19T19:50:31Z"
    },
    {
    "publishedAt": "2021-02-13T18:11:06Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Walmart! #37",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
    "default": {
    "url": "https://i.ytimg.com/vi/79uDV7kv8ko/default.jpg",
    "width": 120,
    "height": 90
    },
    "medium": {
    "url": "https://i.ytimg.com/vi/79uDV7kv8ko/mqdefault.jpg",
    "width": 320,
    "height": 180
    },
    "high": {
    "url": "https://i.ytimg.com/vi/79uDV7kv8ko/hqdefault.jpg",
    "width": 480,
    "height": 360
    }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2021-02-13T18:11:06Z"
    }
    ]
    }
]