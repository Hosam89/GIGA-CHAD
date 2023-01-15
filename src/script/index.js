const seachPage = document.querySelector("#search");
const cardsContainer = document.querySelector('#cards-container');
const atristLayout = cardsContainer.innerHTML
const homebutton = document.querySelector('#home');
const songs_cards = document.querySelector('#song-cards');
const artist_cards = document.querySelector('#artist-cards');
const searchContainer =  document.querySelector('#search-container')

const mainArtistImage = document.querySelector('#artist-pic');
const mainArtistName = document.querySelector('#artist-name');
const mainLinstSong = document.querySelectorAll('.songs');
window.onload =async ()=>{
    const lastSearched = await getData(`search?q=${localStorage.getItem('searched')}`);
    const artistInfo = await lastSearched.data
    mainArtistImage.src = artistInfo[0].artist.picture_big
    mainArtistName.innerText = artistInfo[0].artist.name
    mainLinstSong.forEach((song , index) =>{
        song.firstChild.src = artistInfo[index].artist.picture_xl;
        song.lastChild.innerText = artistInfo[index].title
    })
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

        searchInput.addEventListener("change", function() {

        // Get the value of the input
        const searchValue = searchInput.value;
        });
     

        
            searchInput.addEventListener('change' ,async ()=>{
                
                const search = searchInput.value.trim().split(' ').join("");
                //Save the search Varibale to the LoaclStorage

               window.localStorage.setItem('searched' , search)
                const data = await  getData(`search?q=${search}`);
                console.log(data);
                const artistInfo = await data.data
                console.log(artistInfo);
                

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
           
                right.classList.add('d-felx' , 'justify-content-center' , 'align-items-center')
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
                playList.classList.add('list-group')
                const playListItem = document.createElement('li')
                for(let i = 0 ; i<=5 ; i++){
                    playList.innerHTML+= `<li class="songs d-flex"> <img src='${artistInfo[i].artist.picture_xl}' class="album-pic"> <a href="${artistInfo[i].preview}" target="_blank"> ${artistInfo[i].title}</br><span class="title">${artistInfo[i].artist.name}</span></a> </li>`
                    // playListItem.innerText += artistInfo[i].title
                    // playList.append(playListItem)
                }

                card_body.append(card_song_name , card_song_atrist)
                card.append(card_img , card_body)
                left.append(card)
                right.append(playList)
                songs_cards.append(left , right)
                
                
            })
  
 })

