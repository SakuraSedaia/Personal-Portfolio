/*
# Responsive.js
# Created by Sakura Sedaia
# 
# Please do not steal without crediting me
*/

// Rig Dropdown
var rdpContain = document.getElementById('rdp')
var rdpSACRText = document.getElementById('rdpSACRText')
var rdpSLACMEText = document.getElementById('rdpSLACMEText')
var rdpSACRBtn = document.getElementById('rdpSACRBtn')
var rdpSLACMEBtn = document.getElementById('rdpSLACMEBtn')
var closeRdpBtn = document.getElementById('closeRdpBtn')

var rdp = [
  rdpContain,
  rdpSACRText,
  rdpSLACMEText,
  rdpSACRBtn,
  rdpSLACMEBtn,
  closeRdpBtn
]

function rigsDropdown (state) {
  if (state == 'open') {
    rdp[0].style.height = '4in'
    rdp[1].style.top = '1in'
    rdp[2].style.top = '1in'
    rdp[3].style.top = '1.2in'
    rdp[4].style.top = '1.2in'

    window.setTimeout('rdp[1].style.opacity = 1', 300)
    window.setTimeout('rdp[2].style.opacity = 1', 300)
    window.setTimeout('rdp[3].style.opacity = 1', 400)
    window.setTimeout('rdp[4].style.opacity = 1', 400)
    window.setTimeout('rdp[5].style.right = ".2in"', 400)
    window.setTimeout('rdp[5].style.opacity = 1', 400)
  } else if (state == 'close') {
    rdp[0].style.height = '0in'
    rdp[1].style.top = '0in'
    rdp[2].style.top = '0in'
    rdp[3].style.top = '0.2in'
    rdp[4].style.top = '0.2in'
    rdp[5].style.right = '-.2in'

    rdp[1].style.opacity = 0
    rdp[2].style.opacity = 0
    rdp[3].style.opacity = 0
    rdp[4].style.opacity = 0
    rdp[5].style.opacity = 0
  }
}

// Links
function openInternal (url) {
  // Internal Links
  window.open(url + '.html', '_self')
}

function openExternal (url) {
  // External Links
  if (window.confirm('Are you sure you want to go to an external page?')) {
    window.open('https://' + url, '_blank')
  }
}

function openText (url) {
  // Internal Links
  window.open("assets/text/" + url + ".txt", '_blank')
}

function emailSaki () {
  if (
    window.confirm(
      'You are about to be redirected to your choice of E-Mail, are you sure you want to continue?'
    )
  ) {
    window.open('mailto:sakus@outlook.com')
  }
}

// Rig Downloads
function downloadSACR (state) {
  if (state == true) {
    window.open('assets/misc/SACR R4.1.1 LTS.zip')
    console.info('Rig Download started')
  } else if (state == false) {
    window.alert(
      "I'm sorry, but this download link is disabled Temporarily, please try again later"
    )
    console.error('Rig download Disabled')
  }
}

function downloadSLACME (state) {
  if (state == true) {
    window.open('assets/misc/LACM - Sakuras Edit V2.zip')
    console.info('Rig Download started')
  } else if (state == false) {
    window.alert(
      "I'm sorry, but this download link is disabled Temporarily, please try again later"
    )
    console.error('Rig download Disabled')
  }
}

// Developer Tools
var devMode = false
var useDevRefresh = true
var devRefreshInterval = 3000

if (devMode == true && useDevRefresh == true) {
  var devConsoleWarning = console.warn('Developer Tools Activated')
  window.setTimeout('window.location.reload()', devRefreshInterval)
}

document.getElementById('devWarning').innerHTML = '<strong>Warning: </strong>This site is still in Development, please report any issues to Sakura at <a href="#" onclick="emailSaki()">this Email</a>'
