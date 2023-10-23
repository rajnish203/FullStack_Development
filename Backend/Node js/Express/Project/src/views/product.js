const slider = document.querySelector('.image-slider');
const images = document.querySelectorAll('.image-slider img');
let currentImageIndex = 0;

function slideImage() {
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = 1;
}

setInterval(slideImage, 3000); // Change image every 3 seconds
