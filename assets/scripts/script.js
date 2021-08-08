// Link Handling
function openInternal(url) {
    window.open(url,"_self");
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

function downloadRig(file) {
    if(file==null) {
        window.alert("This download does not exist")
    } else {
        var url = window.location.hostname + "/assets/rigstuff/" + file;
        var localURL = "/assets/rigstuff/" + file;
        console.log("Initiated Download request for file " + file + ", from " + url)
        if (window.confirm("You are about to download a file from the site, are you sure you want to continue?\n\nSite Link: " + url)) {
            window.open("https://sakura-sedaia.com" + localURL);
        }
    }
}
