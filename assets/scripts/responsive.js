/*
# Responsive.js
# Created by Sakura Sedaia
# 
# Please do not steal without crediting me
*/

var sideNav = document.getElementById('sideNav')
var viewport = document.getElementById('viewport')
var sideNavBurger = document.getElementById('sideNavBurger')
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */

function openNav () {
  sideNav.style.width = '250px'
  viewport.style.marginLeft = '250px'
  sideNavBurger.innerHTML = "menu_open"
  sideNavBurger.parentElement.setAttribute('onclick','closeNav()')
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav () {
  sideNav.style.width = '0'
  viewport.style.marginLeft = '0'
  sideNavBurger.innerHTML = "menu"
  sideNavBurger.parentElement.setAttribute('onclick','openNav()')
}

// Links
function openInternal (url) {
  // Internal Links
  window.open(url + '.html', '_self');
}
var securityBadge;

function openExternal (url, isSiteSecure) {
  if (isSiteSecure == 'secure' || isSiteSecure == 1) {
    securityBadge = 'https://'
  } else if (isSiteSecure != 'secure' || isSiteSecure == 0) {
    securityBadge = 'http://'
  }
  // External Links
  if (window.confirm('Are you sure you want to go to an external page?')) {
    window.open(securityBadge + url, '_blank');
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
    window.open('assets/rigstuff/SACR R4.2.zip')
    console.info('Rig Download started')
  } else if (state == false) {
    window.alert(
      "I'm sorry, but this download link is disabled Temporarily, please try again later"
    );
    console.error('Rig download Disabled')
  }
}

// Age JS Calculations
var ageDate = new Date()

var ageMonth = ageDate.getMonth()
var ageDay = ageDate.getDate()
var ageYear = ageDate.getFullYear()

var birthDate = new Date('june 19 2003')

var beforeBirthday

// If/Else check for if it is before my Birthday or not
if (ageMonth == 5 && ageDay < 19) {
  beforeBirthday = true
  console.info('DEBUG: Date is before June 19th')
} else if (ageMonth < 5) {
  beforeBirthday = true
  console.info('DEBUG: Date is before June')
} else if (ageMonth > 5 || (ageMonth == 5 && day == 19)) {
  beforeBirthday = false
  console.info('DEBUG: Date is after June')
}

// If/Else Math to set Age
var birthYear = birthDate.getFullYear()

var ageNumber
var age

var ageStepOne = ageYear - birthYear
var sakuraAge

if (beforeBirthday == true) {
  sakuraAge = ageStepOne - 1
} else if (beforeBirthday == false) {
  sakuraAge = ageStepOne
}


var header = document.getElementById('header')
var xmasCounter = document.getElementById('xmasCounter')

// Seasons
var xmasDate = new Date()

var xmasMonth = xmasDate.getMonth()
var xmasDay = xmasDate.getDate()

if ((xmasMonth == 11 && xmasDay <= 25) || (xmasMonth == 10 && xmasDay > 26)) {
  christmas = true
} else {
  christmas = false
}

if (christmas == true) {
  console.info(
    'DEBUG: It is Christmas Time, changing to Christmas Header Image'
  )

  // Change Backgrounds
  header.style.backgroundImage =
    'url(assets/images/WPRenders/SakiAzzy-Wallpaper-Fixed-Composited.png)'
  header.style.backgroundPosition = '0 -1in'

  // Christmas Countdown
  if (xmasMonth == 11) {
    xmasCounter.innerText = 25 - xmasDay
  } else {
    xmasCounter.innerText = 30 - xmasDay + 25
  }
}
if (christmas == false) {
  console.info(
    'DEBUG: It is not Christmas Time, changing back to Normal Header Image'
  )

  // Change Backgrounds
  header.style.backgroundImage = 'url("assets/images/WPRenders/Sakura_Slave_Escape_Web.jpg")'
  header.style.backgroundPosition = 'center top'

  // Modify HTML Elements
  xmasCounter.innerText = 'Not Christmas Time'
  document.getElementById('xmasContainer').style.visibility = 'hidden'
}


var devMode = true;

if (devMode == true) {
  devModeScript('assets/scripts/dev-mode.js')
  console.warn('Developer Mode Activated')
}


var getLastScript = document.body.childNodes[document.body.childNodes.length-1]
// Import Dev Tool Script
function devModeScript (url) {
  var script = document.createElement('script') // create a script DOM node
  script.src = url // set its src to the provided URL
  console.time('Developer Scripts Imported in')

  getLastScript.insertAdjacentElement('afterend',script)
}
