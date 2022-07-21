import 'p5/lib/addons/p5.sound'

var song, fft;

export default function sketch(p5) {
  p5.preload = () => {
    song = p5.loadSound("../../public/music/song-1.mp3");
  };

  p5.setup = () => {
    p5.createCanvas(window.screen.width, window.screen.height);
    fft = new p5.FFT();
  };

  p5.mouseClicked = () => {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }

  p5.draw = () => {
    p5.background(0, 0, 0);
    p5.stroke(255, 255, 255);
    p5.noFill();

    var wave = fft.waveform();
    console.log(wave)

    p5.beginShape();
    for (var i = 0; i < window.screen.width; i++) {
      var index = Math.floor(Math.map(i, 0, window.screen.width, 0, wave.length));

      var x = i;
      var y = wave[index] * 300 + window.screen.height / 2;

      p5.vertex(x, y);
    }
    p5.endShape();
  };
}
