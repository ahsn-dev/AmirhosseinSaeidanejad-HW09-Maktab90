function toggleMenu() {
  const menuItems = document.getElementById("menu-items");
  menuItems.style.display === "none"
    ? (menuItems.style.display = "block")
    : (menuItems.style.display = "none");
}
