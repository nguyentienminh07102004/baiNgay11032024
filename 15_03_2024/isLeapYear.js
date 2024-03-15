let year = parseInt(prompt("Enter a year: "));
let isLeapYear = false;
if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
    isLeapYear = true;
}
if(isLeapYear){
    alert(year + " is a leap year");
}
else{
    alert(year + " isn't a leap year");
}