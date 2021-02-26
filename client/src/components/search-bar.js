import './search-bar.css';
// import image2 from '../images/fluffeetalkscartoon.jpeg';

export const SearchBar = ({input, handleChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search</label>
      <input 
        name="search" 
        type="text"
        value={input}
        onChange={(e) => handleChange(e)}
        placeholder="FluffeeTalk episode"
        />
      <button type="Submit" disabled={input.length === 0}>Search</button>
    </form>
  )
}