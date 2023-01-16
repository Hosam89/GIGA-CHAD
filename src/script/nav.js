const sideNav = document.getElementById('sidenav');
const navBtn = document.getElementById('mobile-toggle-btn');
const logoLine = document.getElementById('logo-line');
let visible = false; 

navBtn.addEventListener("click", () => {
  visible = !visible;
  sideNav.classList.toggle("active");
});
const smallscreen = 450
window.addEventListener("load", () => {
  if (window.innerWidth > smallscreen) {
    sideNav.classList.add("active");
    logoLine.classList.toggle("active");
    sideNav.style.transition = 'none';
    visible = true;
  } else {
    sideNav.classList.remove("active");
    visible = false;

    // transition: transform 0.3s ease-in-out;
  }
});

window.addEventListener('resize' , ()=>{
  if(window.innerWidth > smallscreen){
    sideNav.classList.toggle('active')
  }
})
