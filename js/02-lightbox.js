import { galleryItems } from './gallery-items.js';
// // Change code below this line


const createPictureCard = ({ preview, original, description }) => {
    return `
<li>
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>
`;
};

const galleryMarkup = galleryItems.map(createPictureCard).join('');

const cardsContainer = document.querySelector('.gallery');

cardsContainer.insertAdjacentHTML('beforeend', galleryMarkup);

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});




