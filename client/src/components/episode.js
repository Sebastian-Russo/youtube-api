import React from 'react';
import { useHistory } from 'react-router-dom';
import ResponsivePlayer from './responsive-player';
import './episode.css';

export const Episode = ({item}) => {
  const history = useHistory();

  if (!item) return (<div></div>)


  console.log(item.id)
  const videoId = item.id.videoId;

  return (
    <div>
      <div>{item.title}</div>
      <div className="player-container">
        <ResponsivePlayer videoId={videoId}/>
      </div>
      <button 
        className="btn"
        onClick={() => history.goBack()}
      >Back to Episodes</button>
    </div>
  )
}
