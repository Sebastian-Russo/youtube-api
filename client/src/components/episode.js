import React from 'react';
import ResponsivePlayer from './responsive-player';
import './episode.css';

export const Episode = ({item}) => {
  if (!item) return (<div></div>)
  console.log(item.id)
  const videoId = item.id.videoId;

  return (
    <div>
      <div>{item.title}</div>
      <div className="player-container">
        <ResponsivePlayer videoId={videoId}/>
      </div>
    </div>
  )
}
