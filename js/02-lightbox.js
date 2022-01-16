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
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
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
 
    var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
}
