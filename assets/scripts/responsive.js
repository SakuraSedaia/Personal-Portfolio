/*
# Responsive.js
# 
# 
# 
# 
*/

// Rig Dropdown
var rigDropdownExtend = false;

var rdpContain = document.getElementById("rdp");
var rdpSACRText = document.getElementById("rdpSACRText");
var rdpSLACMEText = document.getElementById("rdpSLACMEText");
var rdpSACRBtn = document.getElementById("rdpSACRBtn");
var rdpSLACMEBtn = document.getElementById("rdpSLACMEBtn");

var rdp = [rdpContain,rdpSACRText,rdpSLACMEText,rdpSACRBtn,rdpSLACMEBtn];

function openRigsDropdown() {
	if (rigDropdownExtend == false) {
		rigDropdownExtend = true;
		rdp[0].style.height = "4in";
		rdp[1].style.top = "1in";
		rdp[2].style.top = "1in";
		rdp[3].style.top = "1.2in";
		rdp[4].style.top = "1.2in";

		window.setTimeout('rdp[1].style.opacity = 1',300);
		window.setTimeout('rdp[2].style.opacity = 1',300);
		window.setTimeout('rdp[3].style.opacity = 1',400);
		window.setTimeout('rdp[4].style.opacity = 1',400);
	} else {
		rigDropdownExtend = false;
		rdp[0].style.height = "0in";
		rdp[1].style.top = "0in";
		rdp[2].style.top = "0in";
		rdp[3].style.top = "0.2in";
		rdp[4].style.top = "0.2in";

		rdp[1].style.opacity = 0;
		rdp[2].style.opacity = 0;
		rdp[3].style.opacity = 0;
		rdp[4].style.opacity = 0;
	}
}

function openInternal(url) {
	var webHost = window.location.hostname();

	window.open(webHost + url);
}