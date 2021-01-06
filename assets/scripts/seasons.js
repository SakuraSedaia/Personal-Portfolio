var header = document.getElementById('header')
var xmasCounter = document.getElementById('xmasCounter')

// Global Variables
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
  header.style.backgroundImage =
    'url(assets/images/WPRenders/BarSet_Preview4.png)'
  header.style.backgroundPosition = 'center'

  // Modify HTML Elements
  xmasCounter.innerText = 'Not Christmas Time'
  document.getElementById('xmasContainer').style.visibility = 'hidden'
}
