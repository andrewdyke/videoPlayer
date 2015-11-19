
// HTML5 JavaScript Video Player
var videoApp = {};

videoApp.initPlayer = function() {
	// Set object references
	videoApp.vid = document.getElementById("my_video");
	videoApp.playbtn = document.getElementById("playpausebtn");
	videoApp.seekslider = document.getElementById("seekslider");
	videoApp.curtimetext = document.getElementById("curtimetext");
	videoApp.durtimetext = document.getElementById("durtimetext");
	videoApp.mutebtn = document.getElementById("mutebtn");
	videoApp.volumeslider = document.getElementById("volumeslider");
	// Add event listeners
	videoApp.playbtn.addEventListener("click",videoApp.playPause,false);
	videoApp.seekslider.addEventListener("change",videoApp.vidSeek,false);
	videoApp.vid.addEventListener("timeupdate",videoApp.seektimeupdate,false);
	videoApp.mutebtn.addEventListener("click",videoApp.vidmute,false);
	videoApp.volumeslider.addEventListener("change",videoApp.setvolume,false);
}

// Play/Pause
videoApp.playPause = function() {
	if(videoApp.vid.paused) {
		videoApp.vid.play();
		videoApp.playbtn.innerHTML = "Pause";
	} else {
		videoApp.vid.pause();
		videoApp.playbtn.innerHTML = "Play";
	}
}

// Seeker Bar
videoApp.vidSeek = function() {
	videoApp.seekto = videoApp.vid.duration * (videoApp.seekslider.value / 100);
	videoApp.vid.currentTime = videoApp.seekto;
}

// Seek Time Update
videoApp.seektimeupdate = function() {
	videoApp.nt = videoApp.vid.currentTime * (100 / videoApp.vid.duration);
	videoApp.seekslider.value = videoApp.nt;
	videoApp.curmins = Math.floor(videoApp.vid.currentTime / 60);
	videoApp.cursecs = Math.floor(videoApp.vid.currentTime - videoApp.curmins * 60);
	videoApp.durmins = Math.floor(videoApp.vid.duration / 60);
	videoApp.dursecs = Math.floor(videoApp.vid.duration - videoApp.durmins * 60);
	if(videoApp.cursecs < 10){ videoApp.cursecs = "0"+videoApp.cursecs; }
	if(videoApp.dursecs < 10){ videoApp.dursecs = "0"+videoApp.dursecs; }
	if(videoApp.curmins < 10){ videoApp.curmins = "0"+videoApp.curmins; }
	if(videoApp.durmins < 10){ videoApp.durmins = "0"+videoApp.durmins; }
	videoApp.curtimetext.innerHTML = videoApp.curmins+":"+videoApp.cursecs;
	videoApp.durtimetext.innerHTML = videoApp.durmins+":"+videoApp.dursecs;
}

// Mute Button
videoApp.vidmute = function() {
	if(videoApp.vid.muted){
		videoApp.vid.muted = false;
		videoApp.mutebtn.innerHTML = "Mute";
	} else {
		videoApp.vid.muted = true;
		videoApp.mutebtn.innerHTML = "Unmute";
	}
}

// Volume Slider
videoApp.setvolume = function() {
	videoApp.vid.volume = videoApp.volumeslider.value / 100;
}

// When Page Loads, run this bitch
$( document ).ready(function() {
    console.log( "ready!" );
    videoApp.initPlayer();
});
