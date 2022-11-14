import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')
const galleryMarkup=createGalleryItemsMarkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems.map(({preview,original,description}) => {
    return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
  }).join('');
}

const galleryHandler = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250});
galleryHandler.on('show.simplelightbox');

