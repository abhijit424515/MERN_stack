import React from 'react'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {FaPlay} from 'react-icons/fa'
import {FaPause} from 'react-icons/fa'

function Controls(controlspackage) {
  return (
    <div className='controls'>
      <div className='flexcontainer3'>
        <input type="range" className='slider' value={controlspackage.sliderPosition} onChange={controlspackage.onChange}></input>
      </div>
      <br></br>
      <div className='flexcontainer4'>
        <button className='skipButton' id='skip1' onClick={() => controlspackage.setIsPlaying(() => controlspackage.skipSong(false))}>
          <BsArrowLeftShort />
        </button>
        <button className='playButton' onClick={() => controlspackage.setIsPlaying(() => !controlspackage.isPlaying)}>
            {controlspackage.isPlaying ? <FaPlay />: <FaPause />}
        </button>
        <button className='skipButton' id='skip2' onClick={() => controlspackage.setIsPlaying(() => controlspackage.skipSong(true))}>
          <BsArrowRightShort />
        </button>
      </div>
    </div>
  )
}

export default Controls