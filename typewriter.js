var textArray = ["A Student", "A Designer", "A Developer!"];
var demo = document.getElementById("typeWriter");

var typingDelay = 100;
var erasingDelay = 70;
var nextArrayDelay = 1700;
var i = 0;
var arrayIndex = 0;

function typewriter() {
  if (i < textArray[arrayIndex].length) {
    demo.innerHTML += textArray[arrayIndex].charAt(i);
    i++;
    setTimeout(typewriter, typingDelay);
  } else {
    setTimeout(earse, nextArrayDelay);
  }
}
function earse() {
  if (i > 0) {
    demo.innerHTML = textArray[arrayIndex].substring(0, i - 1);
    i--;
    setTimeout(earse, erasingDelay);
  } else {
    arrayIndex++;
    if (arrayIndex >= textArray.length) arrayIndex = 0;
    setTimeout(typewriter, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(typewriter, nextArrayDelay + 250);
});
