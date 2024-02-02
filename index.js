const images = [
  'https://i.postimg.cc/kgXwsdPR/24-SUNSET-VIEW-FROM-SUNSET-BEACH-jpg-1366x768-q85-crop-upscale.webp',
  'https://i.postimg.cc/Z5xnT1WH/free-video-2157006.webp',
  'https://i.postimg.cc/BbFZRyWx/BB-3bc62e96-2eb1-4c39-b4c4-3ec493a8226a-small.jpg'
];

const intervalTime = 3000;

const slider = document.querySelector('.background-slider');

let currentIndex = 0;

function changeBackground() {
  slider.style.background = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

changeBackground();

setInterval(changeBackground, intervalTime);
