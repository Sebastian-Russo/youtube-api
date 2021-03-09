import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
import image1 from '../images/fluffeetalkspic.png'
import { SearchBar } from './search-bar';
import { Results } from './results';
import { Episode } from './episode';
import { API_BASE_URL } from '../config';
import './App.css';


function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [episode, setEpisode] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(12);
  
  
  // Initial API Call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(`${API_BASE_URL}/videos`)
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
    const {data} = await axios.post(`${API_BASE_URL}/videos`, {
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
          <Link to="/" ><div className="logo-wrapper"><img src={image1} alt="logo" width="100%" /></div></Link>
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

