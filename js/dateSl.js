
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var d = new Date();

document.querySelector(".demo00").innerHTML = days[d.getDay()-2];
document.querySelector(".demo01").innerHTML = d.getDate()-2;
document.querySelector(".demo02").innerHTML = months[d.getMonth()];

document.querySelector(".demo10").innerHTML = days[d.getDay()-1];
document.querySelector(".demo11").innerHTML = d.getDate()-1;
document.querySelector(".demo12").innerHTML = months[d.getMonth()];

document.querySelector(".demo20").innerHTML = days[d.getDay()];
document.querySelector(".demo21").innerHTML = d.getDate();
document.querySelector(".demo22").innerHTML = months[d.getMonth()];

document.querySelector(".demo30").innerHTML = days[d.getDay()+1];
document.querySelector(".demo31").innerHTML = d.getDate()+1;
document.querySelector(".demo32").innerHTML = months[d.getMonth()];

document.querySelector(".demo40").innerHTML = days[d.getDay()+2];
document.querySelector(".demo41").innerHTML = d.getDate()+2;
document.querySelector(".demo42").innerHTML = months[d.getMonth()];