

import { galleryItems } from './gallery-items.js';
// // Change code below this line

console.log(createPictureCard(galleryItems));

const cardsContainer = document.querySelector('.gallery');
const cardsMarkup = createPictureCard(galleryItems);

cardsContainer.insertAdjacentHTML('beforeend', cardsMarkup);

cardsContainer.addEventListener('click', onCardsContainerClick);

function createPictureCard(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `

<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
  })
    .join('');
}

function onCardsContainerClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();
  modalShow(event.target.dataset.source);
}

let instance = null;
function modalShow(src) {
  instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${src}" style="height:100vh; display:block"></img>
    </div>
`,
    {
      onShow: instance => {
        addListener();
      },
      onClose: instance => {
        removeListener();
      },
    },
  );
  instance.show();
}

function addListener() {
  window.addEventListener('keydown', onEscClick);
}

function onEscClick(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

function removeListener() {
  window.removeEventListener('keydown', onEscClick);
}