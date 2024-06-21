

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
function downloadSACR(file, dev) {
    if (file == null) {
        window.alert("This download does not exist")
    } else if (dev != 1) {
        var filepath = window.location.href.substring(0, (window.location.href.length - 9)) + "assets/rig-storage/sacr-directory/" + file;

        console.log("Initiated Download request for file " + file + ", from " + filepath)
        if (window.confirm(`You are about to download a file from the site, are you sure you want to continue?\n\nSite Link: ` + filepath)) {
            var downloadWin = window.open(filepath, "File Download", "width = 100px;");
            if (downloadWin.getElementsByTagName("h1").innerText = "File not found") {
                console.log("File not Found");
            }
        }
    } else if (dev == 1) {
        var filepath = window.location.href.substring(0, (window.location.href.length - 9)) + "assets/rig-storage/sacr-experimental/" + file;

        console.log("Initiated Download request for file " + file + ", from " + filepath)
        if (window.confirm(`You are about to download a file from the site, are you sure you want to continue?\n\nSite Link: ` + filepath)) {
            var downloadWin = window.open(filepath, "File Download", "width = 100px;");
            if (downloadWin.getElementsByTagName("h1").innerText = "File not found") {
                console.log("File not Found");
            }
        }
    }
}
var rootDir = "assets/rig-storage/asset-rigs/"
var rigDir = [
    rootDir + "character-addons/",
    rootDir + "models/"
]
function downloadRig(file,cat) {
    if (file == null) {
        window.alert("This download does not exist")
    } else {
        var filepath = window.location.href.substring(0, (window.location.href.length - 9)) + rigDir[cat] + file;

        console.log("Initiated Download request for file " + file + ", from " + filepath)
        if (window.confirm(`You are about to download a file from the site, are you sure you want to continue?\n\nSite Link: ` + filepath)) {
            var downloadWin = window.open(filepath, "File Download", "width = 100px;");
        }
    }
}

let mdPath = "assets/docs/"
function openMarkdown(md) {
    if (md == null) {
        window.alert("File does not exist")
    } else {
        window.open(mdPath + md, "_blank")
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