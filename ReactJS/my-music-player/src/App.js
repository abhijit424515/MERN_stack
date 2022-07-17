import React, { useEffect, useState } from 'react';
import './App.css';
import songs from './songs';
import Player from './Player'

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0)           // currentSongIndex
  const [nextSongIndex, setNextSongIndex] = useState(1)                 // nextSongIndex
  // for efficient rendering, I am using useState hooks
  
  useEffect(() => {
    setNextSongIndex(() => (currentSongIndex+1)%(songs.length))         // change nextSongIndex 👇
    console.log(songs[currentSongIndex])                
  }, [currentSongIndex]);                                               // when currentSongIndex is changed 👆

  // function nextSongPlease() {
  //   setCurrentSongIndex(() => (currentSongIndex+1)%(songs.length))      // change currentSongIndex when called
  // }

  return (
    <div className="App">
        <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
        />
      {/* <div className='flexcontainer3'>3</div> */}
    </div>
  );
}

export default App;
