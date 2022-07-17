import React, { useEffect, useRef, useState } from 'react'
import songs from './songs'
import Controls from './Controls'


function Player(playerpackage) {
    const MUSIC = useRef(null)
    
    const [percentage, setPercentage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true);
    const [duration, setDuration] = useState(0)
    const [sliderPosition, setSliderPosition] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        if(isPlaying){
            // wave.play()
            MUSIC.current.pause();
        }
        else{
            // wave.pause()
            MUSIC.current.play();
        }
    }, [isPlaying]);
    
    const onChange = (e) => {
        const audio = MUSIC.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
        setSliderPosition(e.target.value)
    }

    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime
    
        setPercentage(+percent)
        setSliderPosition(+percent)
        setCurrentTime(time.toFixed(2))
      }

    const skipSong = (forwards = true) => {
        if(forwards){
            playerpackage.setCurrentSongIndex(() => (playerpackage.currentSongIndex+1)%(songs.length))
        }
        else{
            playerpackage.setCurrentSongIndex(() => (playerpackage.currentSongIndex+songs.length-1)%(songs.length))
        }
        setSliderPosition(0)
    }
    
    return (
    <div className='myplayer'>
        <audio autoplay='true' onTimeUpdate={getCurrDuration} onLoadedData={(e) => {setDuration(e.currentTarget.duration.toFixed(2))}} src={songs[playerpackage.currentSongIndex].src} ref={MUSIC}></audio>
        {/* <MySketch src={songs[playerpackage.currentSongIndex].src} /> */}
        <div className='flexcontainerS'>
            <div className='flexcontainerA'>
                <div className='flexcontainer1'>
                    <h3 className='textdetails'>Playing Now ...</h3> <br></br>
                    
                            <br></br>
                            <div id='songImage'>
                                <img className='song-image' src={songs[playerpackage.currentSongIndex].img_src}></img>
                            </div>
                            {/* <img className='AV' src='./images/AV.gif'></img> */}
                            <br></br><br></br>
                        
                            <div className='textdetails'>
                                <h2 className='song-title'>{songs[playerpackage.currentSongIndex].title} by {songs[playerpackage.currentSongIndex].artist}</h2>
                                <br></br><br></br>
                            </div>
                    
                </div>
                {/* <div className='flexcontainer2'>

                </div> */}
            </div>
            <div className='flexcontainer2'>
                
            </div>
            <div className='flexcontainerB'>
                    <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={skipSong} sliderPosition={sliderPosition} onChange={onChange}/>
                <div className='flexcontainer5 textdetails'>
                    <p>Next up: <span>{songs[playerpackage.nextSongIndex].title} by {songs[playerpackage.nextSongIndex].artist}</span></p>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

function mobitrue() {
    return ( ( window.innerWidth <= 600 ) && ( window.innerHeight <= 800 ) );
}

export default Player
export {mobitrue};