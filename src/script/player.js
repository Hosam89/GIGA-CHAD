// JavaScript Document
const image = document.querySelector('.artistImage')



const audio = new Audio();

let run = document.querySelector('.run');
let stop = "stop";

console.log(localStorage.getItem('searched'));

run.addEventListener('click', async () => {
    const data = await getData(`search?q=${localStorage.getItem('searched')}`);
    const artistInfo = await data.data;
    if(stop === "stop") {
    run.innerHTML = '<i class="fa fa-pause"></i>';
    audio.src = artistInfo[0].preview;
    stop = "start";
    audio.play();
    const artistImage = document.createElement('img');
    artistImage.src = artistInfo[0].artist.picture_big;
    document.querySelector('.artistImage').append(artistImage);
    } else {
    run.innerHTML = '<i class="fa fa-play"></i>';
    stop = "stop";
    audio.pause()
    }
})
