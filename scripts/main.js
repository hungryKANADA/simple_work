var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = `Динозаврики крутые, ` + myName; }
  if(!localStorage.getItem('name')) {
    setUserName();
   } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Динозаврики крутые, ' + storedName; }
    myButton.onclick = function() {
      setUserName(); }