export default function galleryObject () {
    const container = document.querySelector('.mobile-media-gallery');

    const galleryPlaceholder = document.createElement('div');
    galleryPlaceholder.setAttribute('class', 'w-full h-80 md:h-96 flex items-center justify-center rounded relative bg-grey');

    const placeholderIcon = document.createElement('i');
    placeholderIcon.setAttribute('class', 'far fa-image text-4xl text-gray-500'); 

    const galleryObjects = document.createElement('figure');
    galleryObjects.setAttribute('class', 'w-full h-80 md:h-96 flex items-center justify-center rounded relative gallery-object');

    const galleryImage = document.createElement('img');
    galleryImage.setAttribute('class', 'object-cover h-full w-full rounded');
    galleryImage.src = '';
    galleryImage.alt = '';

    galleryPlaceholder.append(placeholderIcon);
    galleryObjects.append(galleryImage);

    container.append(galleryPlaceholder, galleryObjects);
}