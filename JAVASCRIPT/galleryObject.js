export default function galleryObject() {
    const container = document.querySelector('#mobile-gallery');
    const listingImage = document.querySelector('#listingImage');
    const uploadButton = document.querySelector('#uploadButton');
    const prevButton = document.querySelector('#prevButton');
    const nextButton = document.querySelector('#nextButton');
    const imageNumber = document.querySelector('#imageNumber');

    let images = JSON.parse(localStorage.getItem('uploadedImages')) || [];
    let currentIndex = 0;

    function createFigure(imageUrl, index) {
        const figure = document.createElement('figure');
        figure.classList.add('w-full', 'h-80', 'md:h-96', 'flex', 'items-center', 'justify-center', 'rounded', 'relative', 'gallery-object');
        if (index === currentIndex) {
            figure.classList.add('active');
        } else {
            figure.classList.add('hidden');
        }

        const image = document.createElement('img');
        image.classList.add('object-cover', 'h-full', 'w-full', 'rounded', 'gallery-image');
        image.src = imageUrl;
        image.alt = 'Uploaded Image';

        figure.append(image);
        return figure;
    }

    function updateGallery() {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        if (images.length === 0) {
            const placeholder = document.createElement('span');
            placeholder.setAttribute('class', 'w-full h-80 md:h-96 flex items-center justify-center rounded relative bg-grey placeholder');
            const placeholderIcon = document.createElement('i');
            placeholderIcon.setAttribute('class', 'far fa-image text-4xl text-gray-500');
            placeholder.append(placeholderIcon);
            container.append(placeholder);
            prevButton.disabled = true;
            nextButton.disabled = true;
        } else {
            images.forEach((imageUrl, index) => {
                const figure = createFigure(imageUrl, index);
                container.append(figure);
            });
            prevButton.disabled = false;
            nextButton.disabled = false;
        }

        updateImageNumber();
    }

    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    }
    
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    }

    function updateImageNumber() {
        const countText = images.length === 0 ? '0 images' : (images.length === 1 ? '1 image' : `${images.length} images`);
        imageNumber.textContent = `${currentIndex + 1}/${countText}`;
    }

    uploadButton.addEventListener('click', () => {
        const imageUrl = listingImage.value.trim();
        if (imageUrl !== '') {
            images.push(imageUrl);
            localStorage.setItem('uploadedImages', JSON.stringify(images));
            listingImage.value = '';
            currentIndex = images.length - 1; 
            updateGallery();
        }
    });

    prevButton.addEventListener('click', () => {
        showPreviousImage();
    });

    nextButton.addEventListener('click', () => {
        showNextImage();
    });

    updateGallery();
}
