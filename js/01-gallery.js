import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery')
const galleryMarkup=createGalleryItemsMarkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems.map(({preview,original,description}) => {
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
  }).join('');
  
// console.log(markup[0])

}

galleryContainer.addEventListener('click', onGalleryItemsClick);


function onGalleryItemsClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return
  }
  
  // console.log(event.target.dataset.source);

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`)

instance.show()
}



