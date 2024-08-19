
const carouselWrapper = document.querySelector('.carouselWrapper');
const carouselContainer = document.querySelector('.carouselContainer');
const sliderIndicator = document.querySelector('.carouselSliderIndicator');

let isDown = false;
let startX;
let scrollLeft;

carouselWrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    carouselWrapper.classList.add('active');
    startX = e.pageX - carouselWrapper.offsetLeft;
    scrollLeft = carouselContainer.scrollLeft;
});

carouselWrapper.addEventListener('mouseleave', () => {
    isDown = false;
    carouselWrapper.classList.remove('active');
});

carouselWrapper.addEventListener('mouseup', () => {
    isDown = false;
    carouselWrapper.classList.remove('active');
});

carouselWrapper.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselWrapper.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the scroll speed
    carouselContainer.scrollLeft = scrollLeft - walk;
    updateSlider();
});

carouselContainer.addEventListener('scroll', updateSlider);

function updateSlider() {
    const maxScrollLeft = carouselContainer.scrollWidth - carouselContainer.clientWidth;
    const scrollLeft = carouselContainer.scrollLeft;
    const scrollPercentage = (scrollLeft / maxScrollLeft) * 100;
    sliderIndicator.style.width = `${scrollPercentage}%`;
}