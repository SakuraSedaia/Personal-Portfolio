/*
==========================
NOTICE: Do not Distribute without Sakura's prior Concent
==========================

Datecheck.js is used to determine events and such
*/

setDate();

var fullJSDate, dateDay, dateMonth, dateYear, timeHour, timeUTCHour;

function setDate() {
  fullJSDate = new Date();

  dateDay = fullJSDate.getDay; // Days Labeled 1-31
  dateMonth = fullJSDate.getMonth; // Months labeled 0-11, January is 0 December is 11
  dateYear = fullJSDate.getUTCFullYear; // Labaled as a full Year

  timeHour = fullJSDate.getHours; // Hours displayed in 24hr clock

  if(timeHour => 12) {
    timeUTCHour = timeHour - 12 + "PM";
  } else if(timeHour =< 12) {
    timeUTCHour = timeHour + "AM";
  }
}