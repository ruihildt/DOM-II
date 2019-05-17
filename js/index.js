/* /// Changing the height of nav when scrolling down more than 230px
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

/// On hover, change image to black and white
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

// const images = document.querySelectorAll("img");
//
//images.forEach(image => {
//    image.addEventListener(
//        "mouseover",
//        evt => doFilter(evt, "grayscale(100%)")
//    );
//    image.addEventListener(
//        "mouseout",
//        evt => doFilter(evt, "inherit")
//    );
//});
//
//function doFilter(event, filter) {
//    event.target.style.filter = filter;
//}

/// On keypress, change the background color randomly from an array of colors
/// BEWARE EPILEPTIC PEOPLE /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\

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
let color = colors[Math.floor(Math.random() * colors.length)];

const body = document.querySelector("body");
body.addEventListener("keydown", backgroundRandColor);

function backgroundRandColor (event) {
    event.target.style.backgroundColor = color;
}
 */

/// On clicking sign up, have all parents of `.btn` turn to different colors 
const body = document.querySelector("body");
const contentPick = document.querySelector(".content-pick");
const destinations = document.querySelectorAll(".destination");
const buttons = document.querySelectorAll(".btn");

//Event Listeners
buttons.forEach(button => {
    button.addEventListener(
        "click",
        event => borderStyle(event, "2px solid red"),
    )
});

destinations.forEach(destination => {
    destination.addEventListener(
        "click",
        event => borderStyle(event, "2px solid pink")
        ),
        event.stopPropagation()
    });

contentPick.addEventListener(
    "click",
    event => borderStyle(event, "2px solid green")
    )

body.addEventListener(
    "click",
    event => borderStyle(event, "2px solid grey"),
)


// Callback
function borderStyle(event, border) {
    event.target.style.border = border;
}

/// Stop the navigation from items from refreshing the page
const navLinks = document.querySelectorAll("a.nav-link");

navLinks.forEach(link => link.addEventListener('click', evt => {
    evt.preventDefault();
}));