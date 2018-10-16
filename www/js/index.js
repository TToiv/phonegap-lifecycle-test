var key = "pen";
var value = "blue";
window.localStorage.setItem(key, value);

var key = "phone";
var value = "black";
window.localStorage.setItem(key, value);

var key = "keys";
var value = "silver";
window.localStorage.setItem(key, value);

var key = "wallet";
var value = "black";
window.localStorage.setItem(key, value);

var key = "receipt";
var value = "white";
window.localStorage.setItem(key, value);

var key = "pen";
var value = window.localStorage.getItem(key);

alert(key + " is " + value);

var key = "phone";
var value = window.localStorage.getItem(key);

alert(key + " is " + value);

var key = "keys";
var value = window.localStorage.getItem(key);

alert(key + " are " + value);

var key = "wallet";
var value = window.localStorage.getItem(key);

alert(key + " is " + value);

var key = "receipt";
var value = window.localStorage.getItem(key);

alert(key + " is " + value);

function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}