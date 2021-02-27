import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import image1 from '../images/fluffeetalkspic.png'
import { SearchBar } from './search-bar';
import { Results } from './results';
import { Episode } from './episode';
import { Pagination } from './pagination';

/* TODO 
- paginate results 
- user search specific videos
- dynamic routing 
- play video 
 */


function App() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [items, setItems] = useState('');
  const [episode, setEpisode] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(12);

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

  // Get current posts 
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = data.slice(indexOfFirstVideo, indexOfLastVideo);

  // Change page 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
        <div className="logo-wrapper"><img src={image1} alt="logo" width="50%" /></div>
        <SearchBar input={input} handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="result-wrapper">
        <Results items={currentVideos} handleClickEpisode={handleClickEpisode} />
        <Episode item={episode} />
        <Pagination videosPerPage={videosPerPage} totalVideos={data.length} paginate={paginate} />
      </div>
    </div>
  );
}

export default App;




const data = [
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
  },
  {
    "publishedAt": "2021-02-10T19:35:00Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Social Media! #120",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/AoVDq7_nIko/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/AoVDq7_nIko/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/AoVDq7_nIko/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2021-02-10T19:35:00Z"
  },
  {
    "publishedAt": "2021-02-06T20:09:11Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "Worlds Worst Tattoos! #124",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/BDGFn6QuNg8/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/BDGFn6QuNg8/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/BDGFn6QuNg8/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2021-02-06T20:09:11Z"
  },
  {
    "publishedAt": "2021-01-28T19:32:12Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Stupid! #14",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/QaI5A6H_0rI/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/QaI5A6H_0rI/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/QaI5A6H_0rI/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2021-01-28T19:32:12Z"
  },
  {
    "publishedAt": "2021-01-20T19:34:10Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Walmart! #36",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/lgDBG-ynlow/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/lgDBG-ynlow/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/lgDBG-ynlow/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2021-01-20T19:34:10Z"
  },
  {
    "publishedAt": "2021-01-18T19:11:06Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Social Media! #119",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/aht7B9Nx3QA/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/aht7B9Nx3QA/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/aht7B9Nx3QA/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2021-01-18T19:11:06Z"
  },
  {
    "publishedAt": "2021-01-13T19:02:44Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "Worlds Worst Tattoos! #123",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/h2HYxcPMTMQ/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/h2HYxcPMTMQ/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/h2HYxcPMTMQ/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2021-01-13T19:02:44Z"
  },
  {
    "publishedAt": "2021-01-06T18:49:39Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Walmart! #35",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/tjj72gYgAOw/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/tjj72gYgAOw/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/tjj72gYgAOw/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2021-01-06T18:49:39Z"
  },
  {
    "publishedAt": "2020-12-30T20:02:54Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "Worlds Worst Tattoos! #122",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/UvMAcC30zl4/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/UvMAcC30zl4/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/UvMAcC30zl4/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-12-30T20:02:54Z"
  },
  {
    "publishedAt": "2020-12-23T20:04:09Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Christmas 2020!",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/RYbxKTUFA3Y/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/RYbxKTUFA3Y/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/RYbxKTUFA3Y/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-12-23T20:04:09Z"
  },
  {
    "publishedAt": "2020-12-17T20:00:38Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "The MOST Blursed Images EVER! #3",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/BKCaKQns_Q0/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/BKCaKQns_Q0/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/BKCaKQns_Q0/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-12-17T20:00:38Z"
  },
  {
    "publishedAt": "2020-12-16T19:34:13Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Tinder! #91",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/K5bUxWIuXh0/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/K5bUxWIuXh0/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/K5bUxWIuXh0/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-12-16T19:34:13Z"
  },
  {
    "publishedAt": "2020-12-11T21:36:59Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Social Media! #118",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/QvOBCTzkHVo/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/QvOBCTzkHVo/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/QvOBCTzkHVo/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-12-11T21:36:59Z"
  },
  {
    "publishedAt": "2020-12-09T19:23:32Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "Worlds Worst Tattoos! #121",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/c2h1kQth_MA/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/c2h1kQth_MA/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/c2h1kQth_MA/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-12-09T19:23:32Z"
  },
  {
    "publishedAt": "2020-12-05T19:54:46Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Tinder! #90",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/zIc7S6Yo94E/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/zIc7S6Yo94E/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/zIc7S6Yo94E/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-12-05T19:54:46Z"
  },
  {
    "publishedAt": "2020-11-28T18:34:23Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Craigslist! #14",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/11Engf7fdFk/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/11Engf7fdFk/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/11Engf7fdFk/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-11-28T18:34:23Z"
  },
  {
    "publishedAt": "2020-11-26T19:57:43Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Social Media! #117",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/X9RQmUFVlcI/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/X9RQmUFVlcI/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/X9RQmUFVlcI/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-11-26T19:57:43Z"
  },
  {
    "publishedAt": "2020-11-20T19:27:03Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Walmart! #34",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/7C1tQMKu-zc/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/7C1tQMKu-zc/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/7C1tQMKu-zc/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-11-20T19:27:03Z"
  },
  {
    "publishedAt": "2020-11-18T19:48:41Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "Worlds Worst Tattoos! #120",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/iqLDUXBL3tw/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/iqLDUXBL3tw/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/iqLDUXBL3tw/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-11-18T19:48:41Z"
  },
  {
    "publishedAt": "2020-11-11T18:50:18Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Tinder! #89",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/9AQtI19kFnY/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/9AQtI19kFnY/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/9AQtI19kFnY/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-11-11T18:50:18Z"
  },
  {
    "publishedAt": "2020-11-06T19:11:55Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Social Media! #116",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/lBhGqRpruEY/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/lBhGqRpruEY/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/lBhGqRpruEY/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-11-06T19:11:55Z"
  },
  {
    "publishedAt": "2020-11-04T18:08:54Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Walmart! #33",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/zubUeFBQbJA/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/zubUeFBQbJA/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/zubUeFBQbJA/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-11-04T18:08:54Z"
  },
  {
    "publishedAt": "2020-10-31T18:33:54Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "The MOST Blursed Images EVER!",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/ekYe4wCD4to/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/ekYe4wCD4to/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/ekYe4wCD4to/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-10-31T18:33:54Z"
  },
  {
    "publishedAt": "2020-10-30T19:17:50Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "Worlds Worst Tattoos! #119",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/b70nlx_s2ck/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/b70nlx_s2ck/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/b70nlx_s2ck/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-10-30T19:17:50Z"
  },
  {
    "publishedAt": "2020-10-24T19:05:28Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Social Media! #115",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/fS15guNaHA8/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/fS15guNaHA8/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/fS15guNaHA8/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-10-24T19:05:28Z"
  },
  {
    "publishedAt": "2020-10-21T19:06:34Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Stupid! #13",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/drydky5W68k/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/drydky5W68k/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/drydky5W68k/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-10-21T19:06:34Z"
  },
  {
    "publishedAt": "2020-10-17T19:55:48Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "THE MOST INSANE REVENGE ON CHEATERS EVER!!",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/y1maQH93fSs/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/y1maQH93fSs/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/y1maQH93fSs/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-10-17T19:55:48Z"
  },
  {
    "publishedAt": "2020-10-13T17:33:51Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Social Media! #114",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/r_AUZzlHLbg/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/r_AUZzlHLbg/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/r_AUZzlHLbg/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-10-13T17:33:51Z"
  },
  {
    "publishedAt": "2020-10-08T19:56:43Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "Worlds Worst Tattoos! #118",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/qeSjB5QZRFA/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/qeSjB5QZRFA/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/qeSjB5QZRFA/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-10-08T19:56:43Z"
  },
  {
    "publishedAt": "2020-10-06T18:43:05Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Walmart! #32",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/OtjfXcTn2uM/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/OtjfXcTn2uM/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/OtjfXcTn2uM/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-10-06T18:43:05Z"
  },
  {
    "publishedAt": "2020-09-30T18:17:38Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Social Media! #113",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/Er0v2GECkyA/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/Er0v2GECkyA/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/Er0v2GECkyA/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-09-30T18:17:38Z"
  },
  {
    "publishedAt": "2020-09-27T19:26:41Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Tinder! #88",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/YbCsiLVNMYg/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/YbCsiLVNMYg/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/YbCsiLVNMYg/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-09-27T19:26:41Z"
  },
  {
    "publishedAt": "2020-09-22T19:18:31Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "Worlds Worst Tattoos! #117",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/DnaDISwlCok/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/DnaDISwlCok/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/DnaDISwlCok/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-09-22T19:18:31Z"
  },
  {
    "publishedAt": "2020-09-17T18:17:46Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Social Media! #112",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/-z0aCf8d5ws/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/-z0aCf8d5ws/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/-z0aCf8d5ws/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-09-17T18:17:46Z"
  },
  {
    "publishedAt": "2020-09-14T18:51:33Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Tinder! #87",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/FPKogLeLJ_o/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/FPKogLeLJ_o/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/FPKogLeLJ_o/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-09-14T18:51:33Z"
  },
  {
    "publishedAt": "2020-09-09T19:11:15Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "I bought Colts OnlyFans so you don&#39;t have to",
    "description": "Colt from 90 Day Fiance started a OnlyFans account and I had to check it out, here are my thoughts. Check out my Patreon content: http://www.",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/OUCx_KYPf5o/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/OUCx_KYPf5o/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/OUCx_KYPf5o/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-09-09T19:11:15Z"
  },
  {
    "publishedAt": "2020-09-06T21:13:46Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at S3XTING!! #30",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/3ynM5zL8alY/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/3ynM5zL8alY/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/3ynM5zL8alY/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-09-06T21:13:46Z"
  },
  {
    "publishedAt": "2020-08-31T19:29:00Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "WTF is Happening in These Pictures!? #45",
    "description": "Together we will solve this mystery. Check out my Patreon content: http://www.Patreon.com/FLuffeetalks Don't forget to Subscribe to my YouTube Channel!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/o-02T7Yy1Ug/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/o-02T7Yy1Ug/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/o-02T7Yy1Ug/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-08-31T19:29:00Z"
  },
  {
    "publishedAt": "2020-08-25T19:03:08Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "Worlds Worst Tattoos! #116",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/_-pHb4poAP0/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/_-pHb4poAP0/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/_-pHb4poAP0/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-08-25T19:03:08Z"
  },
  {
    "publishedAt": "2020-08-24T19:29:32Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Craigslist #13",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/tnptMLkj8EA/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/tnptMLkj8EA/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/tnptMLkj8EA/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-08-24T19:29:32Z"
  },
  {
    "publishedAt": "2020-08-21T18:36:14Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "What is Happening Here!?",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/MCmyDrHMNT8/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/MCmyDrHMNT8/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/MCmyDrHMNT8/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-08-21T18:36:14Z"
  },
  {
    "publishedAt": "2020-08-17T21:48:01Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Tinder! #86",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/FrfvpJCP3rk/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/FrfvpJCP3rk/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/FrfvpJCP3rk/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-08-17T21:48:01Z"
  },
  {
    "publishedAt": "2020-08-14T17:15:14Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Walmart! #31",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/Qg8T_DskCaI/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/Qg8T_DskCaI/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/Qg8T_DskCaI/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-08-14T17:15:14Z"
  },
  {
    "publishedAt": "2020-08-07T19:26:06Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "Worlds Worst Tattoos! #115",
    "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/uiXdUtjuo7g/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/uiXdUtjuo7g/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/uiXdUtjuo7g/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-08-07T19:26:06Z"
  },
  {
    "publishedAt": "2020-08-04T18:15:33Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "Covid-19 at Walmart! #4",
    "description": "Let's check back in on how the people of Walmart are dealing with Covid-19. Check out my Patreon content: http://www.Patreon.com/FLuffeetalks Don't forget to ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/x621RNkce-k/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/x621RNkce-k/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/x621RNkce-k/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-08-04T18:15:33Z"
  },
  {
    "publishedAt": "2020-07-29T19:00:03Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "You&#39;re Bad at Social Media! #110",
    "description": "I don't want to alarm you but today we are looking at bad social media posts.. Check out my Patreon content: http://www.Patreon.com/FLuffeetalks Don't forget to ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/Ew0cCSHw4-k/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/Ew0cCSHw4-k/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/Ew0cCSHw4-k/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-07-29T19:00:03Z"
  },
  {
    "publishedAt": "2020-07-24T18:49:05Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "Worlds Worst Tattoos! #114",
    "description": "I don't think this series will ever end as long as the internet still exists. Check out my Patreon content: http://www.Patreon.com/FLuffeetalks Don't forget to ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/dZdbjaxoQGE/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/dZdbjaxoQGE/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/dZdbjaxoQGE/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-07-24T18:49:05Z"
  },
  {
    "publishedAt": "2020-07-15T18:31:03Z",
    "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
    "title": "Worlds Worst Cakes! #11",
    "description": "I searched the internet looking for the worst cakes I could find and here's what I found. Check out my Patreon content: http://www.Patreon.com/FLuffeetalks Don't ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/hD0hcOBk5lc/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/hD0hcOBk5lc/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/hD0hcOBk5lc/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "FLuffeeTalks",
    "liveBroadcastContent": "none",
    "publishTime": "2020-07-15T18:31:03Z"
  }
]