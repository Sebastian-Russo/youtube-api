import './search-bar.css';

export const SearchBar = ({input, handleChange, handleSubmit, handleSelection}) => {

  return (
    <form onSubmit={handleSubmit}>
      <button type="Submit" disabled={input.length === 0}>Search</button>
      <input 
        name="search" 
        type="text"
        value={input}
        onChange={(e) => handleChange(e)}
        placeholder="FluffeeTalks episode"
        />
      <label htmlFor="search">Select</label>
      <select onChange={(e) => handleSelection(e)}>
        <option>Categories</option>
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