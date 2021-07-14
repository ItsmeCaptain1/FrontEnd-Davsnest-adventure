var it = document.getElementById("op");
function clickMe() {
  it.textContent = "You clicked Here!!";
}
function mourseOverEvent() {
  it.textContent = "On button";
}
function mouseOurEvent() {
  it.textContent = "Out button";
}
function keyDown() {
  it.textContent = "Pressing Key";
}
function keyUp() {
  it.textContent = "Releasing Key";
}
function focussed() {
  it.textContent = " focussed mode on";
}
function blurred() {
  it.textContent = " blurred mode on";
}

function changeCar() {
  var temp = document.getElementById("mySelect").value;
  it.textContent = "You selected " + temp + ".";
}
