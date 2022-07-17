var song
var fft

function preload() {
  song = loadSound('../public/music/song-1.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT()
}

function draw() {
  background(0,0,0)
  stroke(255,255,255)
  noFill()

  var wave = fft.waveform()
  // console.log(wave)

  beginShape()
  for(var i=0; i<windowWidth; i++){
    var index = floor(map(i,0,windowWidth,0,wave.length))
    
    var x = i
    var y = wave[index]*300 + windowHeight/2

    vertex(x,y)
  }
  endShape()
}

function mouseClicked() {
  if (song.isPlaying()){
    song.pause()
  }
  else {
    song.play()
  }
}