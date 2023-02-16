document.getElementById("hider").addEventListener("click", function () {
  document.getElementById("text").style.display = "none";
  setTimeout(() => {
    document.getElementById("hider").style.display = "none";
  }, 400);
});
