import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCards = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryCards);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryItems(galleryItems) {
  return galleryItems
  .map(({ preview, original, description }) => {
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

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const isGalleryItem = evt.target.classList.contains('gallery__image');
  if (!isGalleryItem) {
    return;
  }
 
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`)
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') instance.close();
  });
  
  return instance.show();
}

