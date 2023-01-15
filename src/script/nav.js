// const sidenav = document.getElementById('sidenav');
// const navBtn = document.getElementById('mobile-toggle-btn');
// let visible = null; 

// navBtn.addEventListener('click', () => {
//     if (window.innerWidth < 451) {
//     if (visible !== true) {
//         sidenav.style.transform = 'translateX(100%)';
//         visible = true;
//     } else {
//         sidenav.style.transform = 'translateX(200%)';
//         visible = null; 
//     };
//     }
// });

const sidenav = document.getElementById('sidenav');
const navBtn = document.getElementById('mobile-toggle-btn');
let visible = false; 

// navBtn.addEventListener('click', () => {
//     if (window.innerWidth < 451) {
//         if (!visible) {
//             sidenav.style.transform = 'translateX(0%)';
//             sidenav.style.display = 'block';
//             visible = true;
//         } else {
//             sidenav.style.transform = 'translateX(-100%)';
//             visible = false; 
//         }
//     } else return;
// });

navBtn.addEventListener("click", () => {
  visible = !visible;
  sidenav.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 451) {
    sidenav.classList.add("active");
    visible = true;
  } else {
    sidenav.classList.remove("active");
    visible = false;
  }
});