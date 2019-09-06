function startTime() {
  var today = new Date();
  var c = today.getMonth()+1; 
  var w = today.getDay();
  var d = today.getDate();
  var y = today.getFullYear(); 
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var a = today.getHours()-12;
  var button = document.createElement('button');
  m = checkTime(m);
  s = checkTime(s);

  if (c==1) {
c = "January";
}
  if (c==2) {
c = "February"; 
}
  if (c==3) {
c = "March"; 
}
  if (c==4) {
c = "April"; 
}
  if (c==5) {
c = "May"; 
}
  if (c==6) {
c = "June"; 
}
  if (c==7) {
c = "July";
}
  if (c==8) {
c = "August"; 
}
  if (c==9) {
c = "September"; 
}
  if (c==10) {
c = "October"; 
}
  if (c==11) {
c = "November"; 
}
  if (c==12) {
c = "December"; 
}
  if (w==0) {
w = "Sunday"; 
}
  if (w==1) {
w = "Monday"; 
}
  if (w==2) {
w = "Tuesday"; 
}
  if (w==3) {
w = "Wednesday"; 
}
  if (w==4) {
w = "Thursday"; 
}
  if (w==5) {
w = "Friday"; 
}
  if (w==6) {
w = "Saturday"; 
}
  if (w==0) {
w = "Sunday"; 
}

function myFunction() {
  ;
}

  document.getElementById('txt').innerHTML =
 w + " " + c + "," + " " + d + "," + " " + y + "@" + h + ":" + m + ":" + s;

}

//is setInterval a function and if so why doesn't it need a function qualifier
setInterval(startTime, 1000);
function checkTime(i) {
  if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
  return i;
}
startTime();
