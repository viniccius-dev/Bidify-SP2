let currentImageIndex = 0;
const totalImages = document.querySelectorAll('.listing-img').length;
const imageCounter = document.getElementById('imageCounter');

function showImage(index) {
    const images = document.querySelectorAll('.listing-img');
    images.forEach((img, i) => {
        if (i === index) {
            img.classList.remove('hidden');
            img.classList.add('active');
        } else {
            img.classList.remove('active');
            img.classList.add('hidden');
        }
    });
    imageCounter.textContent = `${index + 1}/${totalImages} images`;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
});

const figure = document.querySelector('.relative.flex');
let startX;
let dist;
let threshold = 100; 

figure.addEventListener('touchstart', (e) => {
    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    dist = 0;
});

figure.addEventListener('touchmove', (e) => {
    e.preventDefault();
    let touchObj = e.changedTouches[0];
    let deltaX = touchObj.pageX - startX;
    if (Math.abs(deltaX) >= threshold) {
        dist = deltaX;
    }
});

figure.addEventListener('touchend', () => {
    if (Math.abs(dist) >= threshold) {
        if (dist > 0) {
            currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        } else {
            currentImageIndex = (currentImageIndex + 1) % totalImages;
        }
        showImage(currentImageIndex);
    }
});
