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

function downloadRig(file) {
    if (file == null) {
        window.alert("This download does not exist")
    } else {
        var filepath = window.location.href.substring(0, (window.location.href.length - 9)) + "assets/rig-storage/" + file;
        console.log("Initiated Download request for file " + file + ", from " + filepath)
        if (window.confirm(`You are about to download a file from the site, are you sure you want to continue?\n\nSite Link: ` + filepath)) {
            var downloadWin = window.open(filepath, "File Download", "width = 100px;");
            if (downloadWin.getElementsByTagName("h1").innerText = "File not found") {
                console.log("File not Found");
            }
        }
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

let mdPath = "assets/docs/"
function openMarkdown(md) {
    window.open(mdPath + md, "_blank")
}