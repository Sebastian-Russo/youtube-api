import React from 'react';
// import ResponsivePlayer from './responsive-player';

export const Episode = ({item}) => {
  // console.log(item)

  return (
    <div className="episode-wrapper">
      <div>{item.title}</div>
      {/* <ResponsivePlayer url={url}/> */}
    </div>
  )
}
