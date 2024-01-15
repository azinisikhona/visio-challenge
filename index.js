const images = [
    ''
  ];

  const intervalTime = 3000;

  const slider = document.getElementsByClassName('background-slider');

  let currentIndex = 0;

  function changeBackground() {
    slider.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
  }

  changeBackground();

  setInterval(changeBackground, intervalTime);