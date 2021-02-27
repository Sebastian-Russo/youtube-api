import './results.css';

export const Results = ({items, handleClickEpisode}) => {
  
  if(!items || items.length === 0) return ( <div></div>);
  
  const itemList = items.map((item,i) => {
    return (
      <div key={i} className="episode-wrapper" onClick={(e) => handleClickEpisode(e,item)}>
        <div className="img-wrapper"><img src={item.thumbnails.medium.url} alt="thumbnail"/></div>
        <div>{item.title}</div>
        {/* <div>{item.description}</div> */}
      </div>
    )
  })
  
  return (
    <div className="episode-container">{itemList}</div>
  )
}
