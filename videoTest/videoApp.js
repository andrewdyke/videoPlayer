
// HTML5 JavaScript Video Player
var videoApp = {};

videoApp.initPlayer = function() {
	// Set object references
	videoApp.theVid = document.getElementById("theVid");
	videoApp.playBtn = document.getElementById("playPause");
	videoApp.seekSlider = document.getElementById("seekSlider");
	videoApp.curTimeText = document.getElementById("curTimeText");
	videoApp.durTimetext = document.getElementById("durTimeText");
	videoApp.muteBtn = document.getElementById("muteBtn");
	videoApp.volSlider = document.getElementById("volSlider");
	// Add event listeners
	videoApp.playBtn.addEventListener("click",videoApp.playPause,false);
	videoApp.seekSlider.addEventListener("change",videoApp.vidSeek,false);
	videoApp.theVid.addEventListener("timeupdate",videoApp.seektimeupdate,false);
	videoApp.muteBtn.addEventListener("click",videoApp.vidmute,false);
	videoApp.volSlider.addEventListener("change",videoApp.setvolume,false);
}

// Play/Pause
videoApp.playPause = function() {
	if(videoApp.theVid.paused) {
		videoApp.theVid.play();
		videoApp.playBtn.innerHTML = "Pause";
	} else {
		videoApp.theVid.pause();
		videoApp.playBtn.innerHTML = "Play";
	}
}

// Seeker Bar
videoApp.vidSeek = function() {
	videoApp.seekTo = videoApp.theVid.duration * (videoApp.seekSlider.value / 100);
	videoApp.theVid.currentTime = videoApp.seekTo;
}

// Seek Time Update
videoApp.seektimeupdate = function() {
	videoApp.nt = videoApp.theVid.currentTime * (100 / videoApp.vid.duration);
	videoApp.seekslider.value = videoApp.nt;
	videoApp.curMins = Math.floor(videoApp.theVid.currentTime / 60);
	videoApp.curSecs = Math.floor(videoApp.theVid.currentTime - videoApp.curMins * 60);
	videoApp.durMins = Math.floor(videoApp.theVid.duration / 60);
	videoApp.durSecs = Math.floor(videoApp.theVid.duration - videoApp.durMins * 60);
	if(videoApp.curSecs < 10){ videoApp.curSecs = "0"+videoApp.curSecs; }
	if(videoApp.durSecs < 10){ videoApp.durSecs = "0"+videoApp.durSecs; }
	if(videoApp.curMins < 10){ videoApp.curMins = "0"+videoApp.curMins; }
	if(videoApp.durMins < 10){ videoApp.durMins = "0"+videoApp.durMins; }
	videoApp.curTimeText.innerHTML = videoApp.curMins+":"+videoApp.curSecs;
	videoApp.durTimeText.innerHTML = videoApp.durMins+":"+videoApp.durSecs;
}

// Mute Button
videoApp.vidMute = function() {
	if(videoApp.theVid.muted){
		videoApp.theVid.muted = false;
		videoApp.muteBtn.innerHTML = "Mute";
	} else {
		videoApp.theVid.muted = true;
		videoApp.muteBtn.innerHTML = "Unmute";
	}
}

// Volume Slider
videoApp.setVolume = function() {
	videoApp.theVid.volume = videoApp.volSlider.value / 100;
}

// When Page Loads, run this bitch
$( document ).ready(function() {
    console.log( "ready!" );
    videoApp.initPlayer();
});
