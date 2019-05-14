/* Changing the height of nav when scrolling down more than 230px */

//Storing the queryselection in nav
const nav = document.querySelector(".main-navigation");

// Setup listener for 
window.addEventListener('scroll', runOnScroll);

// Function to run on scroll
function runOnScroll() {
    let y = window.pageYOffset;
    if (y > 230) {
        nav.classList.add("scrollnav");
    } else {
        nav.classList.remove("scrollnav");
    }
};

