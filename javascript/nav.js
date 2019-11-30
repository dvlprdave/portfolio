// Open and close nav menu
window.openSlideMenu = function openSlideMenu() {
  document.getElementById("side-menu").style.width = "100%";
  document.getElementById("main").style.marginRight = "250px";
}

window.closeSlideMenu = function closeSlideMenu() {
  document.getElementById("side-menu").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}