import './search.css';

export const Search = ({input, handleChange, handleSubmit}) => {
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
      <button type="Submit">Search</button>
    </form>
  )
}