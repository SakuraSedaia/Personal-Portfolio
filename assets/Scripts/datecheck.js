var date = new Date();

var dateMonth = date.getMonth();
var dateDay = date.getDay();
var dateYear = date.getYear();
var timeHour = date.getHours();
var dateDate = date.getDate();

var christmasDate;
var birthdayDate;

var useDatecheckJS = true;

var checkDate = setInterval("checkDateEvent()", 1000);

function stopCheck() {
  clearInterval(checkDate);
}
function checkDateEvent() {
  console.info("Initiating Datecheck.js");

  if (dateMonth == 11) {
    if (dateDate == 20) {
	  chistmasDate = true;
	  console.info("Date is near Christmas");
    } else if (dateDate == 21) {
	  chistmasDate = true;
	  console.info("Date is near Christmas");
    } else if (dateDate == 22) {
	  chistmasDate = true;
	  console.info("Date is near Christmas");
    } else if (dateDate == 23) {
	  chistmasDate = true;
	  console.info("Date is near Christmas");
    } else if (dateDate == 24) {
	  chistmasDate = true;
	  console.info("Date is Christmas Eve (December 24th)");
    } else if (dateDate == 25) {
	  chistmasDate = true;
	  console.info("Date is Christmas Day (December 25th)");
    } else {
      christmasDate = false;
      console.error('Date is not Christmas');
    }
  } else if (dateMonth == 5) {
    if (dateDate == 19) {
	  birthdayDate = true;
	  console.info("Today is Sakura's Birthday");
    } else {
      birthdayDate = false;
      console.error("Today is not June 19 (Birthday)");
    }
  }

  checkTime();
} // End Special Event Checks

var dateNight;

function checkTime() {
  if (timeHour >= 8) {
    dateNight = true;
  } else if (timeHour <= 6) {
    dateNight = true;
  } else {
    dateNight = false;
  }
  setBackground();
}

var backgroundState = 0;

/*
0 = Default Background
1 = Day Background
2 = Night Background
3 = Christmas Day Background
4 = Christmas Night Background
5 = Birthday Day Background
6 = Birthday Night Background
*/

function setBackground() {
  if (dateNight == false) {
    if (christmasDate == false) {
      if (birthdayDate == false) {
        backgroundState = 1;
      } else if (birthdayDate == true) {
        backgroundState = 5;
      }
    } else if (christmasDate == true) {
      backgroundState == 3;
    }
  } else if (dateNight == true) {
    if (christmasDate == false) {
      if (birthdayDate == false) {
        backgroundState = 2;
      } else if (birthdayDate == true) {
        backgroundState = 6;
      }
    } else if (christmasDate == true) {
      backgroundState == 4;
    }
  }

  finalizeScript();
}

function finalizeScript() {
  if (backgroundState == 1) {
    // Execute Functions
  } else if (backgroundState == 2) {
    // Execute Functions
  } else if (backgroundState == 3) {
    // Execute Functions
  } else if (backgroundState == 4) {
    // Execute Functions
  } else if (backgroundState == 5) {
    // Execute Functions
  } else if (backgroundState == 6) {
    // Execute Functions
  } else if (backgroundState == 0) {
    // Execute Functions
  }
}
