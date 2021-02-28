import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './responsive-player.css'

const  ResponsivePlayer = ({videoId}) =>{

  // https://www.youtube.com/watch?v=oXgp7NY8qQw
  const url = `https://www.youtube.com/watch?v=${videoId}`

    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={url}
          controls={true}
          width='50%'
          height='50%'
        />
      </div>
    )
}

export default ResponsivePlayer;