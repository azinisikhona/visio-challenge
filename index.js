$(document).ready(function() {
  const carousel = $('.carousel');
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

  function changeSlide(delta) {
    currentIndex = (currentIndex + delta + carousel.children().length) % carousel.children().length;
    const translateValue = -currentIndex * 100 + '%';
    carousel.css('transform', 'translateX(' + translateValue + ')');
    highlightPagination();
  }

  paginationBtns.click(function() {
    const index = $(this).index();
    changeSlide(index - currentIndex);
  });

  $('.arrow.next').click(function() {
    changeSlide(1);
  });

  highlightPagination();
});