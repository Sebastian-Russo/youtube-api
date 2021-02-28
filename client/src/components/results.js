import { Link } from 'react-router-dom';
import { Pagination } from './pagination';
import './results.css';


export const Results = ({items, handleClickEpisode, videosPerPage, totalVideos, paginate}) => {
  
  if(!items || items.length === 0) return ( <div></div>);
  
  const itemList = items.map((item,i) => {
    return (
      <div key={i} className="episode-wrapper" onClick={(e) => handleClickEpisode(e,item)}>
        <Link to={`/FluffeeTalks/${item.snippet.title}`} >
        <div className="img-wrapper"><img src={item.snippet.thumbnails.medium.url} alt="thumbnail"/></div>
        <div className="title">{item.snippet.title}</div>
        {/* <div>{item.description}</div> */}
        </Link>
      </div>
    )
  })
  
  return (
    <div>
      <div className="episode-container">{itemList}</div>
      <Pagination videosPerPage={videosPerPage} totalVideos={totalVideos} paginate={paginate} />
    </div>
  )
}
