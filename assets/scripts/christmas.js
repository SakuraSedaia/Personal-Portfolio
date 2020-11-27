var header = document.getElementById("header");
var xmasCounter = document.getElementById("xmasCounter");

var d = new Date();

var month = d.getMonth();
var day = d.getDate();

/*
var month = 11;
var day = 26;
*/

if (month == 11) {

  if (day >= 1 && day <= 25) {
    // Internal JS Stuff
    christmas = true;
    console.log("It is Christmas, changing to Christmas Header Image");

    // Change Backgrounds
    header.style.backgroundImage =
      "url(assets/images/WPRenders/SakiAzzy-Wallpaper-Fixed-Composited.png)";
    header.style.backgroundPosition = "0 -1in";

    // Christmas Countdown
    xmasCounter.innerText = 25 - day;

  }

} else if (month != 11) {
  // Internal JS Stuff
  christmas = false;
  console.log("It is not christmas, changing back to Normal Header Image");

  // Change Backgrounds
  header.style.backgroundImage =
    "url(assets/images/WPRenders/FelinaSakura-FeldenRoad.png)";
  header.style.backgroundPosition = "center";

  // Modify HTML Elements
  xmasCounter.innerText = "Still November";
  document.getElementById("xmasContainer").setAttribute("hidden", null);

} else if (month == 11) {
  if (day > 25) {
    // Internal JS Stuff
    christmas = false;
    console.log("It is not christmas, changing back to Normal Header Image");

    // Change Backgrounds
    header.style.backgroundImage =
      "url(https://sakura-sedaia.com/assets/images/WPRenders/FelinaSakura-FeldenRoad.png)";
    header.style.backgroundPosition = "center";

    // Modify HTML Elements
    xmasCounter.innerText = "Christmas is over";
    document.getElementById("xmasContainer").setAttribute("hidden", null);
  }
}