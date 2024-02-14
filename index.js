$(document).ready(function() {
  const carousel = $('.carousel');
  const intervalTime = 3000;
  let currentIndex = 0;

  function changeSlide() {
    currentIndex = (currentIndex + 1) % carousel.children().length;
    const translateValue = -currentIndex * 100 + '%';
    carousel.css('transform', 'translateX(' + translateValue + ')');
  }

  setInterval(changeSlide, intervalTime);
});