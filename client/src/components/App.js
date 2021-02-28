import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import image1 from '../images/fluffeetalkspic.png'
import { SearchBar } from './search-bar';
import { Results } from './results';
import { Episode } from './episode';
import { Pagination } from './pagination';
import './App.css';

/* TODO 
- dynamic routing 
- fix positioning of video player 
- switch mock data to real data, make sure videoId is there 
- add common searches as links in the search bar
*/


function App() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [episode, setEpisode] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(12);
  
  // console.log(query)
  // console.log(items)
  
  
  useEffect(() => {
    setItems(data2.items)  // to work without using up API calls 
    const fetchData = async () => {
      try {
        await axios.post('http://localhost:3001/videos', {
          query: query
        }).then((res) => console.log(res)).catch(err=>console.error(err))

        const data = await axios.get('http://localhost:3001/videos?page=1&limit=50')
        setItems(data.data)
        console.log(data)
      } catch(err) {
        console.error(err)
      }
    }
    // fetchData()
  }, [query])


  const handleChange = e => {
    setInput(e.target.value);
  }

  // user enters seach 
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
  const currentVideos = items.slice(indexOfFirstVideo, indexOfLastVideo);

  // Change page 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <div className="App">
          <div className="logo-wrapper"><img src={image1} alt="logo" width="50%" /></div>
          <SearchBar input={input} handleChange={handleChange} handleSubmit={handleSubmit} />
        
        <Switch>
          

        <div className="result-wrapper">
          <Results items={currentVideos} handleClickEpisode={handleClickEpisode} />
          <Pagination videosPerPage={videosPerPage} totalVideos={items.length} paginate={paginate} />
          <Episode item={episode} />
        </div>


        </Switch>

      </div>
    </Router>
  );
}


export default App;

const data2 = {
  "kind": "youtube#searchListResponse",
  "etag": "j8azCpR6eDtDMiLvC7mQNlC7Fxs",
  "nextPageToken": "CBkQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 1478,
    "resultsPerPage": 25
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "-CYejrEASq1OXw3ME9R5XUZkhOw",
      "id": {
        "kind": "youtube#video",
        "videoId": "oXgp7NY8qQw"
      },
      "snippet": {
        "publishedAt": "2020-03-27T18:46:00Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos!! #110",
        "description": "So, Covid-19 tattoos are a thing now... Check out my Patreon content: http://www.Patreon.com/FLuffeetalks Don't forget to Subscribe to my YouTube Channel!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/oXgp7NY8qQw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/oXgp7NY8qQw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/oXgp7NY8qQw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2020-03-27T18:46:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "gzJf37LtelnX3pRWChJXvn6Nk-w",
      "id": {
        "kind": "youtube#video",
        "videoId": "m1XXtj9kjzM"
      },
      "snippet": {
        "publishedAt": "2019-05-17T19:52:55Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos!! #96",
        "description": "I searched the internet looking for the worst tattoos I could find and here is what I found! Check out my Patreon content: http://www.Patreon.com/FLuffeetalks ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/m1XXtj9kjzM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/m1XXtj9kjzM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/m1XXtj9kjzM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2019-05-17T19:52:55Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "YGB7uf9oObu8S5bEAylW4kB_iI8",
      "id": {
        "kind": "youtube#video",
        "videoId": "-x3vkKijqSo"
      },
      "snippet": {
        "publishedAt": "2018-01-03T22:52:57Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos! #65",
        "description": "-[Stuff to check out]- Buy T-shirts & more: http://www.FLuffeetalks.SpreadShirt.com Follow my Twitter: http://www.twitter.com/FLuffeetalks My gaming channel: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/-x3vkKijqSo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/-x3vkKijqSo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/-x3vkKijqSo/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2018-01-03T22:52:57Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "5UtsA5Vw8HC2dxHxqakSM4ror5k",
      "id": {
        "kind": "youtube#video",
        "videoId": "kETFc8swcgI"
      },
      "snippet": {
        "publishedAt": "2016-08-12T01:51:46Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos! #41",
        "description": "-[Stuff to check out]- Buy T-shirts & more: http://www.FLuffeetalks.SpreadShirt.com Watch my latest video: https://www.youtube.com/watch?v=7ZwJdDgbiAM ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/kETFc8swcgI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/kETFc8swcgI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/kETFc8swcgI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2016-08-12T01:51:46Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "7NuCTNjYHmwraufRBjAF5KuyxqA",
      "id": {
        "kind": "youtube#video",
        "videoId": "76tJCxtDIQI"
      },
      "snippet": {
        "publishedAt": "2018-11-09T19:10:24Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos!!! #88",
        "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/76tJCxtDIQI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/76tJCxtDIQI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/76tJCxtDIQI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2018-11-09T19:10:24Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "sccja2F2-HEsUSK3dhM36GSJ6tU",
      "id": {
        "kind": "youtube#video",
        "videoId": "h2HYxcPMTMQ"
      },
      "snippet": {
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
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "5yY4TX57bmcNyBkEwXTFunTJElE",
      "id": {
        "kind": "youtube#video",
        "videoId": "dAFtzlsE6E8"
      },
      "snippet": {
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
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "MGjYDksX4lcG5vFmz2QHGY1qIc8",
      "id": {
        "kind": "youtube#video",
        "videoId": "Yc5479--2GA"
      },
      "snippet": {
        "publishedAt": "2020-06-20T19:52:41Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos! #113",
        "description": "Some of the worst tattoos you will ever see... Check out my Patreon content: http://www.Patreon.com/FLuffeetalks Don't forget to Subscribe to my YouTube ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Yc5479--2GA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Yc5479--2GA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Yc5479--2GA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2020-06-20T19:52:41Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "80SMmvPgJiODHJo5RB0k8ICCztk",
      "id": {
        "kind": "youtube#video",
        "videoId": "4l5EQV_7x6o"
      },
      "snippet": {
        "publishedAt": "2018-09-07T19:29:53Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos! #82",
        "description": "Tattoos make the world go round. Check out my Patreon: http://www.Patreon.com/FLuffeetalks Don't forget to Subscribe to my YouTube Channel!: http://www.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/4l5EQV_7x6o/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/4l5EQV_7x6o/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/4l5EQV_7x6o/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2018-09-07T19:29:53Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "7E6A-TR9BgP57JCJrrtTrsC9ysc",
      "id": {
        "kind": "youtube#video",
        "videoId": "d20-T4GKbb4"
      },
      "snippet": {
        "publishedAt": "2020-02-28T21:04:31Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos!! #107",
        "description": "Some of the worst tattoos this world has to offer. Check out my Patreon content: http://www.Patreon.com/FLuffeetalks Don't forget to Subscribe to my YouTube ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/d20-T4GKbb4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/d20-T4GKbb4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/d20-T4GKbb4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2020-02-28T21:04:31Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "U82H8JD34dqq5OPm7ZIiSVSKCjs",
      "id": {
        "kind": "youtube#video",
        "videoId": "yPAkpCqN3zg"
      },
      "snippet": {
        "publishedAt": "2018-05-29T15:59:25Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos! #70",
        "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/yPAkpCqN3zg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/yPAkpCqN3zg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/yPAkpCqN3zg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2018-05-29T15:59:25Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "dVKahH686a5XnFgTJCQB7jMK5xI",
      "id": {
        "kind": "youtube#video",
        "videoId": "nDfDuJTAGh0"
      },
      "snippet": {
        "publishedAt": "2019-08-19T19:19:58Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos!!! #101",
        "description": "Some of the worst tattoos for your viewing pleasure! Check out my Patreon content: http://www.Patreon.com/FLuffeetalks Don't forget to Subscribe to my ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/nDfDuJTAGh0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/nDfDuJTAGh0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/nDfDuJTAGh0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2019-08-19T19:19:58Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "kAu3WLo0jB32TqibZAuIKBp7QAE",
      "id": {
        "kind": "youtube#video",
        "videoId": "dZdbjaxoQGE"
      },
      "snippet": {
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
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "7zfHVA1hP2C4Ltkx0Dw2OITG_K8",
      "id": {
        "kind": "youtube#video",
        "videoId": "CCZEOGsxQxY"
      },
      "snippet": {
        "publishedAt": "2017-05-01T21:27:17Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos! #55",
        "description": "-[Stuff to check out]- Buy T-shirts & more: http://www.FLuffeetalks.SpreadShirt.com Watch my latest video: https://www.youtube.com/watch?v=QSRM493UVC0 ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/CCZEOGsxQxY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/CCZEOGsxQxY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/CCZEOGsxQxY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2017-05-01T21:27:17Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "qUNIUBrZqvxIr1ROgsCuEUwB40s",
      "id": {
        "kind": "youtube#video",
        "videoId": "e0eqdicqLOI"
      },
      "snippet": {
        "publishedAt": "2019-04-30T20:05:34Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos!!! #95",
        "description": "Some great bad tattoos, if that makes sense. Check out my Patreon content: http://www.Patreon.com/FLuffeetalks Don't forget to Subscribe to my YouTube ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/e0eqdicqLOI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/e0eqdicqLOI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/e0eqdicqLOI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2019-04-30T20:05:34Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "7x9lLTV_4sQfO4Hne5Bdks2CyKE",
      "id": {
        "kind": "youtube#video",
        "videoId": "E-Pruwi5qlM"
      },
      "snippet": {
        "publishedAt": "2018-07-11T19:23:50Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos! #76",
        "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/E-Pruwi5qlM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/E-Pruwi5qlM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/E-Pruwi5qlM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2018-07-11T19:23:50Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "AMbQe3PUfllDHVGZc-Jit7V8Sec",
      "id": {
        "kind": "youtube#video",
        "videoId": "MsdkA1xLqlQ"
      },
      "snippet": {
        "publishedAt": "2018-05-03T21:07:04Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos! #69",
        "description": "-[Stuff to check out]- Buy T-shirts & more: https://shop.spreadshirt.com/FLuffeetalks/ Follow my Twitter: http://www.twitter.com/FLuffeetalks Follow me on Twitch!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/MsdkA1xLqlQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/MsdkA1xLqlQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/MsdkA1xLqlQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2018-05-03T21:07:04Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "hvJDoVTWAuDSAIwlb_pkbB6BkUo",
      "id": {
        "kind": "youtube#video",
        "videoId": "iA4r5uZKOHc"
      },
      "snippet": {
        "publishedAt": "2020-03-22T17:19:03Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos! #109",
        "description": "I know you are all bored at home so here's some tattoos for your viewing pleasure. Check out my Patreon content: http://www.Patreon.com/FLuffeetalks Don't ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/iA4r5uZKOHc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/iA4r5uZKOHc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/iA4r5uZKOHc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2020-03-22T17:19:03Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "An2MR-5mC-51-sgSvSVdUrCA5cc",
      "id": {
        "kind": "youtube#video",
        "videoId": "o0Fdf80FyLg"
      },
      "snippet": {
        "publishedAt": "2020-01-28T20:00:08Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos!!! #105",
        "description": "Some of the worst tattoos you will see on the internet. Check out my Patreon content: http://www.Patreon.com/FLuffeetalks Don't forget to Subscribe to my ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/o0Fdf80FyLg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/o0Fdf80FyLg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/o0Fdf80FyLg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2020-01-28T20:00:08Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "xJOTxjeUYkuwP47sDj0zx9M0t7o",
      "id": {
        "kind": "youtube#video",
        "videoId": "c2h1kQth_MA"
      },
      "snippet": {
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
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "-3OMi4LbA4u0sIQF3a8QW1FLNic",
      "id": {
        "kind": "youtube#video",
        "videoId": "Qsf1o4tdw9Y"
      },
      "snippet": {
        "publishedAt": "2020-05-13T18:51:32Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos! #111",
        "description": "Some of the worlds worst tattoos, some more COVID-19 tattoos also... Check out my Patreon content: http://www.Patreon.com/FLuffeetalks Don't forget to ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Qsf1o4tdw9Y/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Qsf1o4tdw9Y/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Qsf1o4tdw9Y/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2020-05-13T18:51:32Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "SXVgJ2Y9nnOo5jtJ0AhVFry7W_0",
      "id": {
        "kind": "youtube#video",
        "videoId": "3gCTID8ZOXg"
      },
      "snippet": {
        "publishedAt": "2017-07-29T17:30:00Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos! #60",
        "description": "-[Stuff to check out]- Buy T-shirts & more: http://www.FLuffeetalks.SpreadShirt.com Watch my latest video: https://www.youtube.com/watch?v=QSRM493UVC0 ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/3gCTID8ZOXg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/3gCTID8ZOXg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/3gCTID8ZOXg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2017-07-29T17:30:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "U1onaHXE5uoMFuoAJs4y5NYASgs",
      "id": {
        "kind": "youtube#video",
        "videoId": "qeSjB5QZRFA"
      },
      "snippet": {
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
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "ZNGFK6TmM3Hm9g_ohIqEcZZ8zH0",
      "id": {
        "kind": "youtube#video",
        "videoId": "_-pHb4poAP0"
      },
      "snippet": {
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
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "eigp98NsMCgGunmsvQK9Fbok6qg",
      "id": {
        "kind": "youtube#video",
        "videoId": "KTTwTM9G-k8"
      },
      "snippet": {
        "publishedAt": "2018-03-09T17:14:05Z",
        "channelId": "UCBh8XcZST_JTHt-IZDxT_pQ",
        "title": "Worlds Worst Tattoos! #68",
        "description": "Learn how to avoid a bad tattoo. Step one, don't be these people... Check out my Patreon!: http://www.Patreon.com/FLuffeetalks Don't forget to Subscribe to my ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/KTTwTM9G-k8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/KTTwTM9G-k8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/KTTwTM9G-k8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FLuffeeTalks",
        "liveBroadcastContent": "none",
        "publishTime": "2018-03-09T17:14:05Z"
      }
    }
  ]
}
