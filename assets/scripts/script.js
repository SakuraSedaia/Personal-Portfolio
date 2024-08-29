// Link Handling
function openInternal(url) {
    window.open(url, "_self");
}
function openExternal(url, trusted) {
    if (trusted != 1) {
        if (window.confirm("You are about to be directed to an external site, wish to continue?\n\nSite Link: " + url)) {
            window.open(url, "_blank");
        }
    } else {
        window.open(url, "_blank");
    }
}
function copyEmail(text) {
    window.alert('Email "' + text + '" copied to clipboard');
    navigator.clipboard.writeText(text);
}

function copyDiscUser(text) {
    window.alert('Discord Name "' + text + '" copied to clipboard');
    navigator.clipboard.writeText(text);
}
// Rigs.html

function openSACR(ver) {// (X.X or X.X-Dev)
    var sacrPath = "https://github.com/SakuraSedaia/SACR-MC-Rig/releases/tag/R" + ver
    window.open(sacrPath, "_blank");
    console.info(sacrPath);
}

let mdPath = "assets/docs/"
function openMarkdown(md) {
    if (md == null) {
        window.alert("File does not exist")
    } else {
        window.open(mdPath + md, "_blank", "width=800px")
    }
}

var catList = document.getElementsByClassName('catagory')
var ico;
function expandCatagory(index) {
    ico = catList[index].childNodes[1].childNodes[3]
    if (ico.getAttribute('active') == "false") {
        ico.setAttribute('active', true)
        catList[index].setAttribute('expanded', true);
    } else {
        ico.setAttribute('active', false)
        catList[index].setAttribute('expanded', false);
    }
}