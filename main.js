function startTime() {
  var today = new Date();
  var c = today.getMonth()+1; 
  var w = today.getDay();
  var d = today.getDate();
  var y = today.getYear()-100; 
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  if (w==0) {
w = "Sunday" 
}
  if (w==1) {
w = "Monday" 
}
  if (w==2) {
w = "Tuesday" 
}
  if (w==3) {
w = "Wednesday" 
}
  if (w==4) {
w = "Thursday" 
}
  if (w==5) {
w = "Friday" 
}
  if (w==6) {
w = "Saturday" 
}
//don't understand the script immediately below. Don't understand why 'txt' is a div etc.
  document.getElementById('txt').innerHTML =
 w + " " + c + "/" + d + "/" + y + "@" + h + ":" + m + ":" + s;
//I know that this is why my second's are updating but I don't know why. Where is the variable t
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
