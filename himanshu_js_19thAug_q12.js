//display the current day and time
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var hour = today.getHours();
var min = today.getMinutes();
var sec=today.getSeconds();

var suffix = (hour >= 12)? " PM" : " AM";
hour = (hour >= 12)? hour - 12 : hour;
console.log('Today:'+ daylist[day]);
console.log("Time is: " + hour  + ":" + min+":"+sec +" "+ suffix);