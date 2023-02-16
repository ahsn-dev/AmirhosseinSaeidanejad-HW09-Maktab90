const closeButtons = document.querySelectorAll(".close-button");
closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
});
