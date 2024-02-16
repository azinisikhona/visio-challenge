$(document).ready(function() {
  const carousel = $('.carousel');
  const intervalTime = 3000;
  let currentIndex = 0;

  const pagination = $('.pagination');
  for (let i = 0; i < carousel.children().length; i++) {
    pagination.append('<button class="pagination-btn"></button>');
  }
  const paginationBtns = $('.pagination-btn');

  function highlightPagination() {
    paginationBtns.removeClass('active');
    paginationBtns.eq(currentIndex).addClass('active');
  }


  function changeSlide() {
    currentIndex = (currentIndex + 1) % carousel.children().length;
    const translateValue = -currentIndex * 100 + '%';
    carousel.css('transform', 'translateX(' + translateValue + ')');
    highlightPagination();
  }


  const interval = setInterval(changeSlide, intervalTime);


  paginationBtns.click(function() {
    clearInterval(interval);
    currentIndex = $(this).index();
    const translateValue = -currentIndex * 100 + '%';
    carousel.css('transform', 'translateX(' + translateValue + ')');
    highlightPagination();
    interval = setInterval(changeSlide, intervalTime);
  });


  highlightPagination();
});