import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './App.css';
import { Search } from './search';
import { Results } from './results';
import axios from 'axios';


function App() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get('http://localhost:3001/videos?page=1&limit=3')
        console.log(data)
      } catch(err) {
        console.error(err)
      }
    }
    fetchData()
  }, [query])


  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault()
    setQuery(input)
  }

  return (
    <div className="App">
      <Search input={input} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Results data={data}/>
    </div>
  );
}

export default App;





const data = [
  { episode: 'episode 1'},
  { episode: 'episode 2'},
  { episode: 'episode 3'},
  { episode: 'episode 4'},
  { episode: 'episode 5'},
  { episode: 'episode 6'},
  { episode: 'episode 7'},
  { episode: 'episode 8'},
  { episode: 'episode 9'},
  { episode: 'episode 10'},
  { episode: 'episode 11'},
  { episode: 'episode 12'},
  { episode: 'episode 13'},
  { episode: 'episode 14'},
]
