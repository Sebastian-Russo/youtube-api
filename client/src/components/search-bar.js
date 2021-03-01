import './search-bar.css';

export const SearchBar = ({input, handleChange, handleSubmit, handleSelection}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search</label>
      <input 
        name="search" 
        type="text"
        value={input}
        onChange={(e) => handleChange(e)}
        placeholder="FluffeeTalks episode"
        />
      <button type="Submit" disabled={input.length === 0}>Search</button>
      <select onChange={(e) => handleSelection(e)}>
        <option value="World's Worst Tattoos">World's Worst Tattoos</option>
        <option value="Wtf is happening in these pictures">Wtf is happening in these pictures</option>
        <option value="You're bad at Walmart">You're bad at Walmart</option>
        <option value="You're bad at social media">You're bad at social media</option>
        <option value="You're not sexy">You're not sexy</option>
        <option value="You're bad at tinder">You're bad at tinder</option>
        <option value="You're bad at Craigslist">You're bad at Craigslist</option>
      </select>
    </form>
  )
}