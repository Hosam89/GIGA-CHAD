const seachPage = document.querySelector("#search");
const searchIcon  = "f002"



 seachPage.addEventListener('click' ,()=>{
     const cardsContainer = document.querySelector('#cards-container');
     cardsContainer.innerHTML = "";
   // Create the input element
const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search...";
searchInput.id = "search-input";
searchInput.classList.add("search-bar");

// Create a span element to hold the icon
const searchIcon1 = document.createElement("span");
searchIcon1.classList.add("fa", "fa-search", "search-icon");

// Append the input and icon elements to the search container
searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchIcon1);

// Add the search container to the document body
cardsContainer.appendChild(searchContainer);

// Add a change event listener to the input
searchInput.addEventListener("change", function() {
  // Get the value of the input
  const searchValue = searchInput.value;

  // Perform the search
  console.log("Searching for: " + searchValue);
});

     cardsContainer.append(searchInput);

     searchInput.addEventListener('change' , ()=>{
        
        const search = searchInput.value.trim().split(' ').join("")
         const data =  getData(`search?q=${search}`);
         searchInput.value = '';
         console.log(data);
     })
  
 })


//  const data =  getData(`search?q=queen`);
// console.log(data);

// Create a div element to hold the search container
const searchContainer = document.createElement("div");
searchContainer.id = "search-container";

