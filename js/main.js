const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

// Available Time

let carouselImages = document.querySelectorAll(".carousel img");
    let currentImage = 0;
    let maxImage = carouselImages.length - 1;

    function showNextImage() {
      carouselImages[currentImage].classList.remove("active");
      if (currentImage === maxImage) {
        currentImage = 0;
      } else {
        currentImage++;
      }
      carouselImages[currentImage].classList.add("active");
    }

    setInterval(showNextImage, 3000);