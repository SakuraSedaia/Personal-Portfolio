/*
# Responsive.js
# 
# 
# 
# 
*/

// Rig Dropdown
var rdpContain = document.getElementById("rdp");
var rdpSACRText = document.getElementById("rdpSACRText");
var rdpSLACMEText = document.getElementById("rdpSLACMEText");
var rdpSACRBtn = document.getElementById("rdpSACRBtn");
var rdpSLACMEBtn = document.getElementById("rdpSLACMEBtn");
var closeRdpBtn = document.getElementById("closeRdpBtn");

var rdp = [
  rdpContain,
  rdpSACRText,
  rdpSLACMEText,
  rdpSACRBtn,
  rdpSLACMEBtn,
  closeRdpBtn,
];

function rigsDropdown(state) {
  if (state == "open") {
    rdp[0].style.height = "4in";
    rdp[1].style.top = "1in";
    rdp[2].style.top = "1in";
    rdp[3].style.top = "1.2in";
    rdp[4].style.top = "1.2in";

    window.setTimeout("rdp[1].style.opacity = 1", 300);
    window.setTimeout("rdp[2].style.opacity = 1", 300);
    window.setTimeout("rdp[3].style.opacity = 1", 400);
    window.setTimeout("rdp[4].style.opacity = 1", 400);
    window.setTimeout('rdp[5].style.right = ".2in"', 400);
    window.setTimeout("rdp[5].style.opacity = 1", 400);
  } else if (state == "close") {
    rdp[0].style.height = "0in";
    rdp[1].style.top = "0in";
    rdp[2].style.top = "0in";
    rdp[3].style.top = "0.2in";
    rdp[4].style.top = "0.2in";
    rdp[5].style.right = "-.2in";

    rdp[1].style.opacity = 0;
    rdp[2].style.opacity = 0;
    rdp[3].style.opacity = 0;
    rdp[4].style.opacity = 0;
    rdp[5].style.opacity = 0;
  }
}

function openInternal(url) {
  window.open(url, "_self");
}

function openExternal(url) {
  if (window.confirm("Are you sure you want to go to an external page?")) {
    window.open("https://" + url, "_blank");
  }
}
/*
window.alert(
  "Warning, this site is still in Development, please be patient as development progresses, currently this site only supports Desktop Layouts"
);
*/
