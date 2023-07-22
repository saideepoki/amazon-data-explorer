const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');

prevButton.addEventListener('click', () => {
  carousel.scrollBy(-300, 0);
});

nextButton.addEventListener('click', () => {
  carousel.scrollBy(300, 0);
});