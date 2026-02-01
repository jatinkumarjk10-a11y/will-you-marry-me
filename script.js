const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const meow = document.getElementById("meow");

/* 🌸 Flower burst animation */
function flowerBurst() {
  const container = document.getElementById("flowers");
  if (!container) return;

  const flowers = ["🌸", "🌺", "💐", "🌷", "🌼"];

  for (let i = 0; i < 30; i++) {
    const flower = document.createElement("span");
    flower.className = "flower";
    flower.textContent =
      flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.bottom = "0";
    flower.style.animationDelay = Math.random() * 0.4 + "s";

    container.appendChild(flower);

    setTimeout(() => flower.remove(), 3000);
  }
}

yesButton.addEventListener("click", () => {
  flowerBurst();   // 🌸
  meow.play();     // 🔊

  setTimeout(() => {
    window.location.href = "yes.html";
  }, 900);
});

// Make the "No" button run away 😼
noButton.addEventListener("mouseover", () => {
  noButton.style.position = "absolute";
  noButton.style.left = Math.random() * 80 + "%";
  noButton.style.top = Math.random() * 80 + "%";
});
