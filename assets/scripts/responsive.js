/*
# Responsive.js
# Created by Sakura Sedaia
# 
# Please do not steal without crediting me
==============================
# Dependency State Meanings and Actions:
# 
# > true = Download is active, runs basic Download Command
# > false = Download is disabled Temporarily, displays warning message to the user
# 
# Console Logs will also be entered on each run
*/


// Rig Dropdown
var rdp = [
  document.getElementById("rdp"),
  document.getElementById("rdpSACRText"),
  document.getElementById("rdpSLACMEText"),
  document.getElementById("rdpSACRBtn"),
  document.getElementById("rdpSLACMEBtn"),
  document.getElementById("closeRdpBtn"),
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

    console.info("Opening Rig Navigation");
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

    console.info("Closing Rig Navigation");
  }
}


// Links
function openInternal(url) {
  window.open(url + ".html","_self");

  console.info("Internal Paged Opened, Destination URL (" + "https://sakura-sedaia.com/" + url + ")")
}

function openExternal(url) {
  if (window.confirm("Are you sure you want to go to an external page?")) {
    window.open("https://" + url, "_blank");

    console.info("External Paged Opened, Destination URL (" + "https://" + url + ")")
  }
}




function downloadSACR(state) {
  if (state == true) {
    window.open('assets/misc/SACR R4.1.1 LTS.zip');
    console.info("Rig Download started");

  } else if (state == false) {
    window.alert("I'm sorry, but this download link is disabled Temporarily, please try again later");
    console.error("Rig download Disabled");

  }
}

function downloadSLACME(state) {
  if (state == true) {
    window.open('assets/misc/LACM - Sakuras Edit V2.zip');
    console.info("Rig Download started");

  } else if (state == false) {

    window.alert("I'm sorry, but this download link is disabled Temporarily, please try again later");
    console.error("Rig download Disabled");
  }
}
