const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ];

  // Interval time between image changes (in milliseconds)
  const intervalTime = 3000;

  // Get the slider element
  const slider = document.getElementsByClassName('background-slider');

  // Initialize index to track current image
  let currentIndex = 0;

  // Function to change the background image
  function changeBackground() {
    // Set the background image
    slider.style.backgroundImage = `url(${images[currentIndex]})`;

    // Increment index for the next image
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Initial background image
  changeBackground();

  // Set interval to change background every intervalTime
  setInterval(changeBackground, intervalTime);