/*

File: dev-mode.js

A developer script by Sakura


##### Injector's #####

Injector code
Copy and paste this code into 
===============================
var devMode = false // Boolean to activate the Developer Script

if(devMode == true) {
  devModeScript("assets/scripts/dev-mode.js");	
  console.warn("Developer Mode Activated")
}
// Import Dev Tool Script
function devModeScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL
    console.time("Developer Scripts Imported in")

    document.body.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
===============================

HTML Developer Warning
# Copy and paste this into your HTML, this should go either Directly Above or Below the Header
===============================

<div class="dev-warning" id="devWarning"><!-- HTML Not Displayed, Developer Mode Disabled --></div>

===============================

##### ABOUT THE FUNCTIONS #####
This Developer Script is a document designed by Sakura to provide easier tools for designing sites as well as providing a structure for Internal Alerts
*/

// Console Debug Timers
console.timeEnd('Developer Scripts Imported in')
console.time('Initiased Developer Script in')

// Developer Tools
var devHTMLWarning = true // Toggle whether to use the Internal HTML Style
var devRefreshInterval = 0 // Sets the Refresh Interval for Dev Refresh, set to 0 to disable

var usePopupWarning = false // Toggles whether or not a window.alert popup will be used to announce broken
var devWarningDiv = document.getElementById('devWarning')

if (devMode == true && usePopupWarning == true) {
  // Function to display the Critical Error Alert
  window.alert(
    'Attention, this site is currently missing something integral, please be patient as a Fix will be being applied soon'
  )
}


if (devMode == true && devRefreshInterval > 0) {
  // Display Warning in Console that the Automated Refresh is activated
  console.warn(
    'Developer Refresh activated, refreshing in: ' + devRefreshInterval
  )

  window.setTimeout('window.location.reload()', devRefreshInterval)
}

if (devMode == true && devHTMLWarning == true) {
  console.time('HTML Developer Warning generated in:')
  var devWarningDiv = document.createElement("div")

  devWarningDiv.innerHTML = '<strong>Warning: </strong>This site is still in Development, please report any issues to Sakura at <a href="#" onclick="emailSaki()">this Email</a>'
  header.insertAdjacentElement('afterend',devWarningDiv)
  // Set Div Warning CSS
  devWarningDiv.style.boxShadow = '0 -4px inset #9c9208'
  devWarningDiv.style.padding = '7.5px'
  devWarningDiv.style.paddingLeft = '25px'
  devWarningDiv.style.paddingBottom = '10px'
  devWarningDiv.style.backgroundColor = ' rgb(255, 238, 2)'
  devWarningDiv.style.color = 'black'
  devWarningDiv.style.fontFamily = 'Open Sans'
  devWarningDiv.childNodes[0].style.fontFamily = 'Noto Sans JP'
  console.timeEnd('HTML Developer Warning generated in:')
}
console.timeEnd('Initiased Developer Script in')

