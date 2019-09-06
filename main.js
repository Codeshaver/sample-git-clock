function startTime() {
  var today = new Date();
  var c = today.getMonth()+1; 
  var d = today.getDay();
  var y = today.getYear()-100; 
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
//don't understand the script immediately below. Don't understand why 'txt' is a div etc.
  document.getElementById('txt').innerHTML =
  c + "/" + d + "/" + y + "@" + h + ":" + m + ":" + s;
//I know that this is why my second's are updating but I don't know why. Where is the variable t
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
