import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import image1 from '../images/fluffeetalkspic.png'
import { SearchBar } from './search-bar';
import { Results } from './results';
import { Episode } from './episode';
import './App.css';

/* TODO 
- add user search
- add common searches as links in the search bar
*/


function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [episode, setEpisode] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(12);
  
  // console.log(items)
  
  // Initial API Call
  useEffect(() => {
    // setItems(data)  // to work without using up API calls 
    const fetchData = async () => {
      try {
        const {data} = await axios.get('http://localhost:3001/videos?page=1&limit=50')
        console.log(data)
        setItems(data)
      } catch(err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

// User Search API Call
const fetchDataSearch = async () => {
  try {
    const {data} = await axios.post('http://localhost:3001/videos', {
      query: input
    })
    console.log(data)
    setItems(data)

  } catch(err) {
    console.log(err)
  }
}

  const handleSelection = (e) => {
    setInput(e.target.value);
  }

  const handleChange = e => {
    setInput(e.target.value);
  }

  // user enters seach 
  const handleSubmit = e => {
    e.preventDefault()
    fetchDataSearch()
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
          <SearchBar input={input} handleChange={handleChange} handleSubmit={handleSubmit} handleSelection={handleSelection} />
        
        <Switch>
          
          <Route 
              exact 
              path="/" 
              render={props => 
                <Results 
                  {...props}
                  items={currentVideos} handleClickEpisode={handleClickEpisode} videosPerPage={videosPerPage} totalVideos={items.length} paginate={paginate} />
              }    
          />
          
          <Route 
              path="/FluffeeTalks/:search" 
              render={props => 
                <Episode 
                {...props}
                item={episode} />
              }    
          />
        
        </Switch>

      </div>
    </Router>
  );
}


export default App;

