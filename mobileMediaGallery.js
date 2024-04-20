document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const imageNumber = document.getElementById("imageNumber");
    const galleryObjects = document.querySelectorAll(".gallery-object");
    let currentImageIndex = 0;
    let totalImages = galleryObjects.length;

    imageNumber.textContent = `1 / ${totalImages}`;

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

    prevButton.addEventListener("click", function () {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        showCurrentImage();
    });

    nextButton.addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showCurrentImage();
    });
});