import React from 'react';
import { useHistory } from 'react-router-dom';
import ResponsivePlayer from './responsive-player';
import './episode.css';

export const Episode = ({item}) => {
  const history = useHistory();

  // console.log(item)
  // if (!item) return (<div></div>)
  if (!item) {
    history.push('/')
    return null;
  }


                   // GET                 // SEARCH - POST
  const {videoId} = item.snippet.resourceId || item.id;


  return (
    <div>
      <div className="player-container">
        <div className="title-wrapper">FluffeeTalks</div>
        <ResponsivePlayer videoId={videoId}/>
        <div className="description-wrapper">
            <div>{item.snippet.title}</div>
            {/* <div>{item.snippet.description}</div> */}
        </div>
      </div>
      <button 
        className="btn"
        onClick={() => history.goBack()}
      >Back to Episodes</button>
    </div>
  )
}
