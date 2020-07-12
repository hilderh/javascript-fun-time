import MediaPlayer from "../playing-basics/video-player.js"

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new MediaPlayer({el: video});
button.onclick = ()=> ( player.isPaused() ) ? player.play() : player.pause();                
