function openExternal(url, trusted) {
    if (trusted != 1) {
        if (window.confirm("You are about to be directed to an external site, wish to continue?\n\nSite Link: " + url)) {
            window.open(url, "_blank");
        }
    } else {
        window.open(url, "_blank");
    }
}
function openInternal(url) {
    window.open(url, '_self');
}
function returnWikiHome() {
    window.open('wiki.html');
}

var skinFile = "https://texture.namemc.com/12/cc/12ccdc2d82bae349.png";
var isSkinAlex = false;
var diagramItem = document.getElementsByClassName("diagram-item");
let i = 0;
function setSkinOpacity() {
    setTimeout(function() {
        diagramItem[i].style.opacity = "100%";
    i++

    if (i < diagramItem.length) {
        setSkinOpacity();
    }
    }, 100);
}

setSkinOpacity();

let i = 0;
while ( i < diagramItem.length ) {
	diagramItem[i].style.backgroundImage = "url(" + skinFile + ")";
	diagramItem[i].childNodes[1].style.backgroundImage = "url(" + skinFile + ")";
    window.setTimeout("console.log('Wait 1 second')",1000);
    i++
}
var skinArmR = document.getElementById("sacrArmR");
var skinArmL = document.getElementById("sacrArmL");
if (isSkinAlex == true) {
	skinArmR.style.width = "37px";
	skinArmL.style.width = "37px";
	skinArmR.style.transform = "scale(110%, 102.33%)";
	skinArmL.style.transform = "scale(110%, 102.33%)";
}
function returnHome() {
    window.open("../index.html", "_self");
}
var copySelf = ["Sakura Sedaia", "&copy;", new Date().getFullYear()];
document.getElementById("copyright").innerHTML = copySelf[1] + " Copyright " + copySelf[2] +" " + copySelf[0] + ", All rights reserved";

function openSACRStable() {
    window.confirm("You are about to be led to an external page, are you sure you want to continue?"); {
        window.open('http://git.sakura-sedaia.com/sacr-mc-rig', "_blank");
    }
}
function openSACRExperimental() {
    window.confirm("You are about to be led to an external page, are you sure you want to continue?"); {
        window.open('http://git.sakura-sedaia.com/sacr_experimental', "_blank");
    }
}
function notWorking() {
    window.alert("Sorry but this page does not exist yet")
}