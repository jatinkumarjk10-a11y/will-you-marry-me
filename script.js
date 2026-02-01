const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const meow = document.getElementById("meow");

yesButton.addEventListener("click", () => {
  // Play meow sound
  meow.play();

  // Redirect to second page after sound
  setTimeout(() => {
    window.location.href = "yes.html";
  }, 800);
});

// Make the "No" button run away
noButton.addEventListener("mouseover", () => {
  noButton.style.position = "absolute";
  noButton.style.left = Math.random() * 80 + "%";
  noButton.style.top = Math.random() * 80 + "%";
});
