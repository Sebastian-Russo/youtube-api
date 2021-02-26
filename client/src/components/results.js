import './results.css';

export const Results = ({data}) => {
  
  const items = data.map((item,i) => {
    return (
      <div key={i} className="episode-wrapper">
        <div>{item.episode}</div>
      </div>
    )
  })
  
  return (
    <div>{items}</div>
  )
}
