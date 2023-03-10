const seachPage = document.querySelector("#search");
const cardsContainer = document.querySelector('#cards-container');
const atristLayout = cardsContainer.innerHTML
const homebutton = document.querySelector('#home');
const songs_cards = document.querySelector('#song-cards');
const artist_cards = document.querySelector('#artist-cards');
const searchContainer =  document.querySelector('#search-container')
const favPage = document.querySelector('#favorites');

const mainArtistImage = document.querySelector('#artist-pic');
const mainArtistName = document.querySelector('#artist-name');
const mainLinstSong = document.querySelectorAll('.songs');
const favArray = []
const artistArray = ['dualipa','petergabriel' , 'genesis' ,'bonnietyler' , 'barrywhite' , 'againstthemall' , 'selenagomez','ninachuba' , 'theweekend' , 'calumscott' , 'vitas' , 'annenmaykantereit' , 'wafikhabib' , 'myriamfares' , 'asereje']
const randomNumber = Math.floor(Math.random() * artistArray.length);
const audio = new Audio();
const albumContainer = document.querySelector('#album-cards');
const klicked = true;
const songsimg = document.querySelectorAll('.album-pic')
const songsTitle = document.querySelectorAll('.title')
let playerSmallPP = document.querySelector('.image-container > img');
const songTitleSmallPP = document.querySelector('.song-description > p');
const artistNamePP = document.querySelector('.artist')

window.onload =async ()=>{
    const lastSearched = await getData(`search?q=${localStorage.getItem('searched')}`);
    const artistInfo = await lastSearched.data;
    console.log(artistInfo);
    mainArtistImage.src = artistInfo[0].artist.picture_big
    mainArtistName.innerText = artistInfo[0].artist.name;
    for(let i = 0 ; i<= 4 ; i++){
        songsimg[i].src = artistInfo[i].artist.picture_big;
        songsTitle[i].innerText = artistInfo[i].title
    }
}


homebutton.addEventListener('click' , ()=>{
    cardsContainer.innerHTML = atristLayout;

})

// homebutton.addEventListener('click' , ()=>{
//     cardsContainer.innerHTML = atristLayout;
//     const storedName = localStorage.key(1)
//   const storedData =  await getData(`search?q${storedName}`)
// })

//Search page event /////////////////////////////////////////////////////////////
 seachPage.addEventListener('click' ,()=>{
    const searchInput = document.querySelector('#search-input');
      
     
        artist_cards.classList.add('d-none');
       searchContainer.classList.remove('d-none');
       cardsContainer.classList.add('d-flex');
        searchInput.addEventListener("change", function() {

        // Get the value of the input
        const searchValue = searchInput.value;
        });
     

        
            searchInput.addEventListener('change' ,async ()=>{
                
                const search = searchInput.value.trim().split(' ').join("").toLowerCase();
                //Save the search Varibale to the LoaclStorage

                const data = await  getData(`search?q=${search}`);
                window.localStorage.setItem('searched' , search)
               
                const artistInfo = await data.data
             
                

                 searchInput.value = ''; 
                 songs_cards.classList.remove('d-none');
                 songs_cards.innerHTML =''
                ////////////////////Card bulid
                songs_cards.style.display = 'flex';
                songs_cards.style.width = '100%'
                const left = document.createElement('div');
                left.style.marginTop = '4rem';
                left.style.marginLeft = '2rem';
                const right = document.createElement('div');
                right.style.marginTop = '4rem';
                right.style.marginLeft = '2rem';
                right.classList.add('d-flex' , 'justify-content-center' , 'align-items-center');
                const card = document.createElement('div');
                card.classList.add('card' , 'text-center');
                card.style.width = '330px';
                const card_img = document.createElement('img');
                card_img.classList.add('card-img-top');
                card_img.src = artistInfo[0].artist.picture_xl
                const card_body = document.createElement('div');
                card_body.classList.add('card-body')
                const card_song_name = document.createElement('h3');
                card_song_name.innerText = artistInfo[0].title;
                const card_song_atrist = document.createElement('p');
                card_song_atrist.innerText = artistInfo[0].artist.name
                const playList = document.createElement('ul');
                playList.classList.add('songlist')
              

                artistInfo.forEach((atrist , index)=>{
                    if(index <= 4){
                        const playListItem = document.createElement('li');
                        playListItem.addEventListener('click' ,()=>{
                            audio.src = artistInfo[index].preview;
                            songTitleSmallPP.innerText = artistInfo[index].title;
                                playerSmallPP.src = artistInfo[index].artist.picture_big;
                                artistNamePP.innerText = artistInfo[index].artist.name;
                               
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
                            const progBar = document.querySelector('.progress').animate([{width : '0%'} , {width: '100%'}],{duration : 30000 ,  iterations: 1} )
                            audio.play(); 
                            progBar.play()
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
                                    audio.play()
                                    progBar.play()
                                }
                            })
                        })
                        playListItem.classList.add('songs' , 'd-flex');
                        playListItem.style.verticalAlign = 'top'
                        playListItem.style.fontSize = "1.2rem";
                        const listSongImg = document.createElement('img');
                        const imgspanContainer = document.createElement('div');

                        listSongImg.classList.add('album-pic');
                        const listSongsTitle = document.createElement('p');
                        listSongsTitle.classList.add('d-flex' , 'flex-column' , 'gap-2');
                       listSongsTitle.style.padding ='10px'
                        listSongsTitle.style.lineHeight = "8px";
                        listSongsTitle.style.height= '50px'
                        const songName = document.createElement('span')
                        const artistName = document.createElement('span')
                        listSongsTitle.style.marginLeft = '10px'
                        listSongsTitle.classList.add('title')
                        listSongImg.src = artistInfo[index].artist.picture_big;
                        songName.innerText =  artistInfo[index].title 
                        artistName.innerText = artistInfo[index].artist.name  ;
                        const likebutton = document.createElement('button');
                        likebutton.classList.add('align-self-end');
                        likebutton.style.background = 'none';
                        likebutton.style.border = 'none';
                   
                        likebutton.style.marginLeft = '6rem';
                        likebutton.style.fontSize = '3rem'
                        const icon = document.createElement('i');
                        icon.classList.add('fa-regular','fa-heart');
                        likebutton.style.color = '#514b5d';
                        likebutton.append(icon)
                        likebutton.addEventListener('click' , ()=>{
                           
                
                            if(icon.classList.contains('fa-regular')){   
                                icon.classList.remove('fa-regular');
                                icon.classList.add('fa-solid');
                                localStorage.setItem(artistInfo[index].id , songName.innerText);
                          
                            }else{
                                icon.classList.add('fa-regular');
                                icon.classList.remove('fa-solid');
                                localStorage.removeItem(songName.innerText);
                            }
                            
                        })
                     
                        listSongsTitle.append(songName ,artistName);
                        playListItem.append(listSongImg , listSongsTitle , likebutton );

                        playList.append(playListItem);
                    }
                }) 
              

                card_body.append(card_song_name , card_song_atrist)
                card.append(card_img , card_body)
                left.append(card)
                right.append(playList)
                songs_cards.append(left , right)
                
                
            })
  
 })

 const randomFive = (arr) => {
    let shuffel = arr.sort(() => 0.5 - Math.random());
    return shuffel.slice(0, 5);
  }; 



  const randomArtist = randomFive(artistArray);
  
(async ()=>{
    
    albumContainer.classList.add('gap-3' , 'row' , 'container-fluid');
    albumContainer.style.marginTop = '4.5rem';
    albumContainer.style.paddingLeft = '14.5px'
    albumContainer.style.width = '100%'
    for(let i = 0 ; i < randomArtist.length ; i++){  
        const data = await getData(`search?q=${randomArtist[i]}`);
        const album = await data.data;
      

        const card = document.createElement('div');
        card.classList.add('card')
        card.style.height = '600px';
        card.style.width = '15%';
        card.style.paddingTop = '10px';
        card.style.fontSize = '2rem'
        const card_body = document.createElement('div');
        card_body.classList.add('card-body')
        


        const albumImg = document.createElement('img');
        albumImg.classList.add('card-img-top')
        albumImg.src = album[i].album.cover_big
        albumImg.style.width = "100%"
        albumImg.classList.add('album-pic')


        const albumName = document.createElement('h3');     
        albumName.innerText = album[i].album.title;
        const artistName = document.createElement('p');   
        artistName.textContent = album[i].artist.name;

        card_body.append(albumName , artistName);
        card.append(albumImg , card_body);
        albumContainer.append(card)

    }
 })()

favPage.addEventListener('click' , async ()=>{
    cardsContainer.innerHTML = " ";
    const listContainer = document.createElement('div');
    const listFav = document.createElement('ul');
    listFav.classList.add('songlist');
    
    for(const item in localStorage){
        if(!isNaN(Number(item))){
            const listImag = document.createElement('img');
            listImag.classList.add('album-pic')
            const songDetailes = document.createElement('span');
            songDetailes.classList.add('title')
            const artist = document.createElement('h3');
            const songtitle = document.createElement('h5');
            const listItem = document.createElement('li');
            listItem.classList.add('songs');
            const trackInfo = await getData(`track/${item}`);
            console.log(trackInfo);


            listItem.addEventListener('click' , ()=>{

            playerSmallPP.src = trackInfo.artist.picture_big;
            songTitleSmallPP.innerText = trackInfo.title;
            artistNamePP.innerText = trackInfo.artist.name
                audio.src = trackInfo.preview;
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
                const progBar = document.querySelector('.progress').animate([{width : '0%'} , {width: '100%'}],{duration : 30000 ,  iterations: 1} )
                audio.play();
                progBar.play()
                volume1.addEventListener('change' , ()=>{
                    audio.volume = parseFloat(volume1.value)
                 })
                play.classList.remove('fa-play');
                play.classList.add('fa-pause')
             
                play.addEventListener('click' , ()=>{
                    if(play.classList.contains('fa-pause')){
                        audio.pause();
                        progBar.pause();
                        play.classList.add('fa-play');
                        play.classList.remove('fa-pause')
                    }else{
                        play.classList.remove('fa-play');
                        play.classList.add('fa-pause');
                        audio.play();
                        progBar.play()
                    }
                })
            })
            listImag.src = trackInfo['artist'].picture_big;
            artist.innerText = trackInfo['artist'].name;
            songtitle.innerText = trackInfo.title;
            songDetailes.append(songtitle , artist);
            listItem.append(listImag, songDetailes);
            listFav.append(listItem);
            listContainer.append(listFav);
            cardsContainer.append(listContainer)

        }
    }






})


