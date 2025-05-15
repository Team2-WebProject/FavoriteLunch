// heejin1.js
window.onload = function () {
  const images = document.querySelectorAll(".menu-card img");

  images.forEach(function (img) {
    img.onclick = function () {
      img.classList.toggle("zoomed");
    };
  });
};
