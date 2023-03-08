const songlist = document.querySelector('.songlist');

const play = document.querySelector('.play-pause');
let volume1 = document.querySelector('#volume-adjust');
const mute  = document.querySelector('.fa-volume-down');
const playerImg = document.querySelector('.image-container > img');
const songTitle = document.querySelector('.song-description > p');

const artistName = document.querySelector('.artist');
const timeUp = document.querySelector('.progress-container > span');
console.log(timeUp);
let secondsUp = 0;
 


songlist.addEventListener('click' ,async (event)=>{
    const searchInput = event.target.innerText;
    console.log(searchInput);
    const search = searchInput.split(' ').join("");
    console.log(search);
    const data = await getData(`search?q=${search}`);
    const songInfo = await data.data;
    console.log(songInfo);
 
  playerImg.src = songInfo[0].artist.picture_big;
  songTitle.innerHTML = songInfo[0].title;

  songTitle.style.color = 'white'

    artistName.innerText = songInfo[0].artist.name;

    console.log(volume1.value);
    audio.src = songInfo[0].preview;
    mute.addEventListener('click' , ()=>{
        
        if(mute.classList.contains('fa-volume-down')){
            audio.volume = 0;
            mute.classList.remove('fa-volume-down');
            mute.classList.add('fa-volume-xmark')
        }else{
            audio.volume = parseFloat(volume1.value)
            mute.classList.add('fa-volume-down');
            mute.classList.remove('fa-volume-xmark')
        }
    })
    console.log(typeof parseFloat(volume1.value));
    audio.play();
    const down = () =>{
        if(secondsUp >= 30){
            secondsUp++
            timeUp.innerHTML = secondsUp
        }
    }
    setInterval(down , 1)
    const progBar = document.querySelector('.progress').animate([{width : '0%'} , {width: '100%'}],{duration : 30000 ,  iterations: 1} )

  
    volume1.addEventListener('change' , ()=>{
        audio.volume = parseFloat(volume1.value)
     })
    play.classList.remove('fa-play');
    play.classList.add('fa-pause')
   console.log(audio.src);
    play.addEventListener('click' , ()=>{
        if(play.classList.contains('fa-pause')){
            audio.pause();
            progBar.pause()
            play.classList.add('fa-play');
            play.classList.remove('fa-pause')
        }else{
            play.classList.remove('fa-play');
            play.classList.add('fa-pause');
            progBar.play()
            audio.play()
        }
    })
  
})