console.log("Welcome to spotify");
// Initialize the variables
let songIndex=0;
let audioElement = new Audio('Assan KE Oh Sohna.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgress=document.getElementById('myProgress');
let gif=document.getElementById('gif');

let songs = [
    {songName: "salam-e-ishq",filePath: "Audio-spotify/Assan KE Oh Sohna.mp3",coverPath: "covers/1mp3"},
    {songName: "salam-e-ishq",filePath: "audio.mp3",coverPath: "covers/1mp3"},
    {songName: "salam-e-ishq",filePath: "audio.mp3",coverPath: "covers/1mp3"},
    {songName: "salam-e-ishq",filePath: "audio.mp3",coverPath: "covers/1mp3"},
    {songName: "salam-e-ishq",filePath: "audio.mp3",coverPath: "covers/1mp3"},
]
// audioElement.play
// Handle Play pause and click
masterPlay.addEventListener('click',()=>{
    if (audioElement.pause || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to music
audioElement.addEventListener('timeupdate',()=>{
      // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgress.ariaValueNow = progress;
})

myProgress.addEventListener('change', ()=>{
audioElement.currentTime = myProgress.ariaValueNow * audioElement.duration/100
})