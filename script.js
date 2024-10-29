const images = ["images/one.jpg", "images/Two.jpg", "images/Three.jpg", "images/Four.jpg", "images/Five.jpg"];

let index = 0;
const slide = document.getElementById('slide');

function next() {
    index++;

    slide.src = images[index];
}