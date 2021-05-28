/*
# Responsive.js
# Created by Sakura Sedaia
# 
# Please do not steal without crediting me
*/

var sideNav = document.getElementById('sideNav')
var viewport = document.getElementById('viewport')

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */

function openNav () {
  sideNav.style.width = '250px'
  viewport.style.marginLeft = '250px'
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav () {
  sideNav.style.width = '0'
  viewport.style.marginLeft = '0'
}

// Links
function openInternal (url) {
  // Internal Links
  window.open(url + '.html', '_self')
}
var securityBadge

function openExternal (url, isSiteSecure) {
  if (isSiteSecure == 'secure' || isSiteSecure == 1) {
    securityBadge = 'https://'
  } else if (isSiteSecure != 'secure' || isSiteSecure == 0) {
    securityBadge = 'http://'
  }
  // External Links
  if (window.confirm('Are you sure you want to go to an external page?')) {
    window.open(securityBadge + url, '_blank')
  }
}

function openText (url) {
  // Internal Links
  window.open('assets/text/' + url + '.txt', '_blank')
}

function emailSaki () {
  if (
    window.confirm(
      'You are about to be redirected to your choice of E-Mail, are you sure you want to continue?'
    )
  ) {
    window.open('mailto:sakusedaia@outlook.com')
  }
}

// Rig Downloads
function downloadSACR (state) {
  if (state == true) {
    window.open('assets/misc/SACR_R5.zip')
    console.info('Rig Download started\nRig Version: 5')
  } else if (state == false) {
    window.alert(
      "I'm sorry, but this download link is disabled Temporarily, please try again later"
    )
    console.error('Rig download Disabled')
  }
}

function openSACRPromotional () {
  if (
    window.confirm(
      'You are about to enter an External Page, are you sure you want to continue?'
    )
  ) {
    window.open(
      'https://www.youtube.com/channel/UCImraZRU4IhVWTyKWDGxJPg',
      '_blank'
    )
  }
}

var devMode = false

if (devMode == true) {
  devModeScript('assets/scripts/dev-mode.js')
  console.warn('Developer Mode Activated')
}
// Import Dev Tool Script
function devModeScript (url) {
  var script = document.createElement('script') // create a script DOM node
  script.src = url // set its src to the provided URL
  console.time('Developer Scripts Imported in')

  document.body.appendChild(script) // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
