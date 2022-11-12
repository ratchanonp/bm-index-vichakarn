const carouselContent = document.querySelector("#carousel-content");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
  const firstChild = carouselContent.firstElementChild;
  const slideWidth = firstChild.clientWidth;

  carouselContent.scrollLeft -= slideWidth;
});

nextButton.addEventListener("click", () => {
  const firstChild = carouselContent.firstElementChild;
  const slideWidth = firstChild.clientWidth;

  carouselContent.scrollLeft += slideWidth;
});
