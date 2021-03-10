/* 
# age.js
#
#
*/

// Global Variables
var ageDate = new Date()

var ageMonth = ageDate.getMonth()
var ageDay = ageDate.getDate()
var ageYear = ageDate.getFullYear()
/*
var month = 6;
var day = 18;
*/

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