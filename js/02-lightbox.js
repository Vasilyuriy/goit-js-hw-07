import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const container = document.querySelector(".gallery");
console.log(container);
console.log(galleryItems);

function createMarkUp(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        ` <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}
container.insertAdjacentHTML("beforeend", createMarkUp(galleryItems));
container.addEventListener("click", handlerProductClick);

function handlerProductClick(evt) {
  evt.preventDefault();
  let galleryBox = new SimpleLightbox(".gallery a");
  gallery.on("show.simplelightbox", function () {});
}
