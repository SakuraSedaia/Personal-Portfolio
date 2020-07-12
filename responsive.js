// Dev Alert
function openDevAlert() {
  window.alert(
    "This page is still under Development, please report any bugs to my email at endergfx6@gmail.com"
  );
  document.getElementById("devWarning").style.animationName =
    "devWarningDeactivate";
  document.getElementById("devWarning").style.animationIterationCount = "1";
  document.getElementById("devWarning").style.animationDuration = ".3s";
  document.getElementById("devWarning").style.cursor = "default";
  document.getElementById("devWarning").removeAttribute("onclick");
}
var isNavOpen;
function openNavigation() {
  if (isNavOpen != 0) {
    document.getElementById("navWrapper").style.animationName = "navAnimateIn";
    isNavOpen = 0;
    document.getElementById("navigation").innerHTML = "menu_open";
  } else if (isNavOpen != 1) {
    document.getElementById("navWrapper").style.animationName = "navAnimateOut";
    isNavOpen = 1;
    document.getElementById("navigation").innerHTML = "menu";
  }
}
