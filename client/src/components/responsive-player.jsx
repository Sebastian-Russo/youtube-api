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
          width='75%'
          height='75%'
        />
      </div>
    )
}

export default ResponsivePlayer;