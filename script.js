const slides = document.querySelectorAll(".slide");
const slider = document.getElementById("slider");
const dotsContainer = document.getElementById("dots");
const playPauseBtn = document.getElementById("playPause");

let currentIndex = 0;
let isPlaying = true;

/* create dots */

slides.forEach((slide, i) => {
  const dot = document.createElement("span");

  if (i === 0) {
    dot.classList.add("active");
  }

  dot.addEventListener("click", () => {
    currentIndex = i;
    updateSlider();
  });

  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

/* update slider */

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));

  dots[currentIndex].classList.add("active");
}

/* auto slide */

setInterval(() => {
  if (!isPlaying) return;

  currentIndex++;

  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  updateSlider();
}, 4000);

/* play pause */

playPauseBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;

  playPauseBtn.textContent = isPlaying ? "⏸" : "▶";
});
