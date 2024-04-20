document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const imageNumber = document.getElementById("imageNumber");
    const galleryObjects = document.querySelectorAll(".gallery-object");
    let currentImageIndex = 0;
    let totalImages = galleryObjects.length;

    // Initially set the total number of images
    imageNumber.textContent = `1 / ${totalImages}`;

    // Function to show current image
    function showCurrentImage() {
        galleryObjects.forEach((obj, index) => {
            if (index === currentImageIndex) {
                obj.classList.remove("hidden");
            } else {
                obj.classList.add("hidden");
            }
        });
        imageNumber.textContent = `${currentImageIndex + 1} / ${totalImages}`;
    }

    // Event listener for previous button
    prevButton.addEventListener("click", function () {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        showCurrentImage();
    });

    // Event listener for next button
    nextButton.addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showCurrentImage();
    });
});