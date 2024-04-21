export default function updateImageCount() {
    const imageCount = document.querySelector('#imageCount');
    const imageNumber = document.querySelector('#imageNumber');
    const uploadedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];

    const totalImages = uploadedImages.length;
    const maxImages = 6;

    imageCount.textContent = `${totalImages}/${maxImages} images`;

    if (totalImages === 0) {
        imageNumber.textContent = '0';
    } else {
        imageNumber.textContent = `1 / ${totalImages}`;
    }
}