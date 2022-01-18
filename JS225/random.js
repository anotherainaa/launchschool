function speak(string) {
  console.log(string)
}

let delayedFunction = function(fn) {
  return function(val, delay) {
    setTimeout(function() {
      fn(val);
    }, delay);
  }
}

speak("hello");
var delayedSpeak = delayedFunction(speak);
delayedSpeak("I'm late!", 1000); 


