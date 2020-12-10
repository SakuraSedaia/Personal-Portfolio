// Developer Tools
var devMode = false
var useDevRefresh = true
var useDevWarning = true
var devRefreshInterval = 3000

if (devMode == true && useDevRefresh == true) {
  var devConsoleWarning = console.warn('Developer Tools Activated')
  window.setTimeout('window.location.reload()', devRefreshInterval)
	
} else if (devMode == true && useDevWarning == true) { // Checks if Dev Warning is being used and then injects the Code
	document.getElementById('devWarning').innerHTML = '<strong>Warning: </strong>This site is still in Development, please report any issues to Sakura at <a href="#" onclick="emailSaki()">this Email</a>'
}
