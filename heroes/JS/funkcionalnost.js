function startTimer(duration, display) {
  var timer = duration,minutes, seconds;
  var timers = setInterval(runner, 1000);
  function runner() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer <= 0) {
     clearInterval(timers)
     finish()
   }
 }

}
//korisnik
function damagec(){
    var a = document.getElementById('str').innerHTML;
    var b = a/20;
    document.getElementById('resultl').innerHTML = b;
    document.getElementById('resultl').style.color = 'green';
    document.getElementById('resultlc').innerHTML = b;
    document.getElementById('resultlc').style.color = 'green';
    //borba
    var label = document.getElementById('wallvalue');
    label.innerHTML = parseInt(label.innerHTML) - b;
    document.getElementById('wallvalue').style.color = 'green';
}
//nije zavrseno
function tutorial (){
    alert("If the value is less then 500 you win! Good luck and have fun!");
}

function enemy(){
    var e= document.getElementById('stre').innerHTML;
    var f=e/20;
    document.getElementById('resultr').innerHTML = f;
    document.getElementById('resultr').style.color = 'red';
    document.getElementById('resultrc').innerHTML = f;
    document.getElementById('resultrc').style.color = 'red';

    var intervalID = window.setInterval(myCallback, 12000);

    function myCallback() {
    var label = document.getElementById('wallvalue');
    label.innerHTML = parseInt(label.innerHTML) + f;
    document.getElementById('wallvalue').style.color = 'red';
    }
}

function finish(){
var h = document.getElementById('wallvalue');

if ( h<500 ) {
    alert("You won!");
}
 else {
 alert("You lost!");
}
}