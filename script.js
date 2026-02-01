const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const response = document.getElementById("response");
const hiddenMessage = document.getElementById("hidden-message");
const meow = document.getElementById("meow");

yesButton.addEventListener("click", () => {
  meow.play();

  setTimeout(() => {
    window.location.href = "yes.html";
  }, 800);
});

  hiddenMessage.style.display = "block";
});

noButton.addEventListener("mouseover", () => {
  noButton.style.position = "absolute";
  noButton.style.left = Math.random() * 80 + "%";
  noButton.style.top = Math.random() * 80 + "%";
});
