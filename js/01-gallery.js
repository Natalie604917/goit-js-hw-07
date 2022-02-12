

import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);



console.log(createPictureCard(galleryItems));

const cardsContainer = document.querySelector('.gallery');
const cardsMarkup = createPictureCard(galleryItems);

cardsContainer.insertAdjacentHTML('beforeend',cardsMarkup);

cardsContainer.addEventListener('click', onCardsContainerClick);

function createPictureCard (galleryItems){
    return galleryItems.map(({preview, original, description})=>{
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

function onCardsContainerClick (event){
    if (!event.target.nodeName !==IMG){
        return;
    }
    event.preventDefault();
    showModal(event.target.dataset.source);
}


let instance = null;



function showModal(src) {
  const onEscClick = event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  };
  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${src}" style="height:100vh; display:block"></img>
    </div>
`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscClick);
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscClick);
      },
    },
  );
  instance.show();
}




