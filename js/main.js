// Available Time
// Availablel Time
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

  // Login 
      const sign_in_btn = document.querySelector("#sign-in-btn");
      const sign_up_btn = document.querySelector("#sign-up-btn");
      const container = document.querySelector(".container");

      sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });

      sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
      


