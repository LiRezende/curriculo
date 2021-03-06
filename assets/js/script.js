// Menu Mobile
window.onload = function () {
    document.querySelector(".menuMobile").addEventListener("click", function () {
      if (document.querySelector(".menu nav ul").style.display == "flex") {
        document.querySelector(".menu nav ul").style.display = "none";
      } else {
        document.querySelector(".menu nav ul").style.display = "flex";
      }
    });
};

// Animação do Título
const title = document.querySelector('h1.title-animation');

function writerAnimation(title) {
  const titleArray = title.innerText.split('');
  title.innerText = '';
  titleArray.forEach((char, i) => {
    setTimeout(() => title.innerHTML += char, 75 * i);
  });
}

writerAnimation(title);

setInterval(function keepWriting() {
  writerAnimation(title);
}, 3000);

// Portfólio Carousel
let slides = document.querySelectorAll(".slide-carousel");
let index = 0;

setInterval(function slide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 5000);

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
};

function previous() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
};

