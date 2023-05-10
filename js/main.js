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

// Validasi Form Login
function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "") {
    Swal.fire({
      title: "Error!",
      text: "Masukan Username!",
      icon: "error",
      confirmButtonText: "OK",
    });
    return false;
  }

  if (password === "") {
    Swal.fire({
      title: "Error!",
      text: "Masukan Password!",
      icon: "error",
      confirmButtonText: "OK",
    });
    return false;
  }

  return true;
}

function validateFormRegister() {
  var usernames = document.getElementById("usernames").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("passwords").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (
    usernames == "" ||
    email == "" ||
    phone == "" ||
    password == "" ||
    confirmPassword == ""
  ) {
    Swal.fire({
      title: "Error!",
      text: "Isi semua formulir!",
      icon: "error",
      confirmButtonText: "OK",
    });
    return false;
  }

  if (password.length < 8) {
    Swal.fire({
      title: "Error!",
      text: "Password harus minimal 8 karakter!",
      icon: "error",
      confirmButtonText: "OK",
    });
    return false;
  }

  if (password != confirmPassword) {
    Swal.fire({
      title: "Error!",
      text: "Konfirmasi Kata Sandi harus sama!",
      icon: "error",
      confirmButtonText: "OK",
    });
    return false;
  }

  var phonePattern = /^\d{10,12}$/;
  if (!phone.match(phonePattern)) {
    Swal.fire({
      title: "Error!",
      text: "Nomor telepon harus 10-12 digit!!",
      icon: "error",
      confirmButtonText: "OK",
    });
    return false;
  }

  // Mengecek apakah email valid
  var emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  if (!email.match(emailPattern)) {
    Swal.fire({
      title: "Error!",
      text: "Masukan Email yang valid!",
      icon: "error",
      confirmButtonText: "OK",
    });
    return false;
  }

  Swal.fire({
    title: "Success!",
    text: "Daftar Berhasil, silahkan log in!",
    icon: "success",
    confirmButtonText: "OK",
    timer: 5000,
  }).then(() => {
    window.location.href = "login.html";
  });

  document
    .querySelector(".sign-in-form")
    .scrollIntoView({ behavior: "smooth" });

  return true;
}
