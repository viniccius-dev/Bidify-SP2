// Variables to keep track of current image and total number of images
let currentImageIndex = 0;
const totalImages = document.querySelectorAll('.w-full.object-cover.h-96.rounded').length;

// Function to show the current image and update counter
function showImage(index) {
    const images = document.querySelectorAll('.w-full.object-cover.h-96.rounded');
    images.forEach((img, i) => {
        if (i === index) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
    const counter = document.getElementById('imageCounter');
    counter.textContent = `${index + 1}/${totalImages} images`;
}

// Event listener for previous button
document.getElementById('prevBtn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
});

// Event listener for next button
document.getElementById('nextBtn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
});

// Touch event listeners for swiping
const figure = document.querySelector('.relative.flex');
let startX;
let startY;
let dist;
let threshold = 150; // Minimum distance required for swipe
let restraint = 100; // Maximum distance allowed at the same time in perpendicular direction

figure.addEventListener('touchstart', (e) => {
    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    dist = 0;
});

figure.addEventListener('touchmove', (e) => {
    e.preventDefault();
    let touchObj = e.changedTouches[0];
    let deltaX = touchObj.pageX - startX;
    let deltaY = touchObj.pageY - startY;
    if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > 0) {
            // Swiping right
            dist = deltaX;
        } else {
            // Swiping left
            dist = deltaX;
        }
    }
});

figure.addEventListener('touchend', () => {
    if (Math.abs(dist) >= threshold && Math.abs(startY) <= restraint) {
        if (dist > 0) {
            // Swiped right
            currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        } else {
            // Swiped left
            currentImageIndex = (currentImageIndex + 1) % totalImages;
        }
        showImage(currentImageIndex);
    }
});
