
console.timeEnd("Developer Scripts Imported in")
console.time("Initiased Developer Script in")

// Developer Tools
var useDevRefresh = false
var devWarning = true
var devRefreshInterval = 3000
var devWarningDiv = document.getElementById('devWarning')



if (devMode == true && useDevRefresh == true) {
  var devConsoleWarning = console.warn('Developer Tools Activated')
  window.setTimeout('window.location.reload()', devRefreshInterval)
} else if (devMode == true && devWarning == true) {
   devWarningDiv.innerHTML = '<strong>Warning: </strong>This site is still in Development, please report any issues to Sakura at <a href="#" onclick="emailSaki()">this Email</a>'
	
	// Set Div Warning CSS
	devWarningDiv.style.borderTop = '2px solid #9c9208'
	devWarningDiv.style.borderBottom = '2px solid #9c9208'
	devWarningDiv.style.padding = "10px"
	devWarningDiv.style.backgroundColor = " rgb(255, 238, 2)"
	devWarningDiv.style.color = "black"
	devWarningDiv.style.fontFamily = "Open Sans"
	devWarningDiv.childNodes[0].style.fontFamily = "Noto Sans JP"

}
console.timeEnd("Initiased Developer Script in")