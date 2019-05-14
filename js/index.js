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

/* On hover, change image to black and white */
const images = document.querySelectorAll("img");

images.forEach(image => image.addEventListener("mouseover", grayscale));
images.forEach(image => image.addEventListener("mouseout", resetColor));

// Callbacks
function grayscale (event) {
    event.target.style.filter = "grayscale(100%)";
}
function resetColor(event) {
    event.target.style.filter = "inherit";
}

// Cabrejas refactor

/* const images = document.querySelectorAll("img");

images.forEach(image => {
    image.addEventListener(
        "mouseover",
        evt => doFilter(evt, "grayscale(100%)")
    );
    image.addEventListener(
        "mouseout",
        evt => doFilter(evt, "inherit")
    );
});

function doFilter(event, filter) {
    event.target.style.filter = filter;
} */

/* On keypress, change the background color randomly from an array of colors */
// BEWARE EPILEPTIC PEOPLE /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\

const colors = [
    "#5D8AA8",
    "#F0F8FF",
    "#E32636",
    "#EFDECD",
    "#E52B50",
    "#FFBF00",
    "#FF033E",
    "#9966CC",
    "#A4C639",
    "#F2F3F4",
    "#CD9575",
    "#915C83",
    "#FAEBD7",
    "#008000",
    "#8DB600"
];

const body = document.querySelector("body").addEventListener("keydown", backgroundRandColor);

function backgroundRandColor (event) {
    let color = colors[Math.floor(Math.random() * colors.length)];

    event.target.style.backgroundColor = color;

}