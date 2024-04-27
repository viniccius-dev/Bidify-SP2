const listingImages = document.querySelectorAll(".listing-img");
const imageCounter = document.getElementById("imageCounter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentImageIndex = 0;
let startX = 0;
let endX = 0;

updateImageCounter();

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

document.addEventListener("mousedown", handleStart);
document.addEventListener("mouseup", handleEnd);

document.addEventListener("touchstart", handleStart);
document.addEventListener("touchend", handleEnd);

function handleStart(event) {
    startX = event.clientX || event.touches[0].clientX;
}

function handleEnd(event) {
    endX = event.clientX || event.changedTouches[0].clientX;
    handleSwipe();
}

function handleSwipe() {
    if (startX - endX > 50) {
        nextImage();
    } else if (endX - startX > 50) {
        prevImage();
    }
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % listingImages.length;
    updateImageCounter();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + listingImages.length) % listingImages.length;
    updateImageCounter();
}

function updateImageCounter() {
    listingImages.forEach((img, index) => {
        if (index === currentImageIndex) {
            img.classList.remove("hidden");
            img.classList.add("active");
        } else {
            img.classList.remove("active");
            img.classList.add("hidden");
        }
    });
    imageCounter.textContent = `${currentImageIndex + 1}/${listingImages.length} images`;
}