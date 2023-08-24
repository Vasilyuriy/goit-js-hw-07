import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const container = document.querySelector(".gallery");
console.log(container);

function createMarkUp(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        ` <li class="gallery__item">
  <a class="gallery__link" href="${original}" download>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
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
  if (evt.target.classList.contains("gallery__image")) {
    const originalImageSrc = evt.target.dataset.source;
    const originalImageAlt = evt.target.alt;

    const instance = basicLightbox.create(`
      <img src="${originalImageSrc}" alt="${originalImageAlt}" />
    `);
    instance.show();
    document.addEventListener("keydown", handleKeyDown);

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        instance.close();
        document.removeEventListener("keydown", handleKeyDown);
      }
    }
  }
}
