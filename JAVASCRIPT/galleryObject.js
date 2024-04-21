export default function galleryObject() {
    const container = document.querySelector('#mobile-gallery');
    const placeholder = document.querySelector('#mobile-placeholder');
    const listingImage = document.querySelector('#listingImage');
    const uploadButton = document.querySelector('#uploadButton');

    uploadButton.addEventListener('click', () => {
        const imageUrl = listingImage.value.trim();
        if (imageUrl !== '') {
            const galleryObjects = document.createElement('figure');
            galleryObjects.setAttribute('class', 'w-full h-80 md:h-96 flex items-center justify-center rounded relative gallery-object');

            const galleryImage = document.createElement('img');
            galleryImage.setAttribute('class', 'object-cover h-full w-full rounded');
            galleryImage.src = imageUrl; 
            galleryImage.alt = 'Uploaded Image'; 

            galleryObjects.appendChild(galleryImage); 
            container.appendChild(galleryObjects); 

            listingImage.value = '';

            placeholder.classList.add('hidden');
        }
    });
}

