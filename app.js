var title = document.getElementById("title");
var increment = document.getElementById("increment");
var decrement = document.getElementById("decrement");
var number = document.getElementById("number");
var wordBox = document.getElementById("word-box");
var currentValue = 0;

console.log("Loaded")

function fizzBuzz(n) {
  var fizzBuzz = "";
  //check for n and return the correct fizzBuzz
  wordBox.innerHTML = "";

  for(var i = 0; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      fizzBuzz += 'fizzBuzz'; 
      wordBox.innerHTML += ' fizzBuzz ';
      console.log('fizzBuzz');
    } else if (i % 3 === 0) {
      fizzBuzz += 'Buzz';
      wordBox.innerHTML += ' Buzz ';
      console.log('Buzz')
    } else if (i % 5 === 0) {
      fizzBuzz += 'fizz';
      wordBox.innerHTML += ' fizz ';
      console.log('fizz');
    } else {
      // console.log(i)
      // wordBox.innerHTML([i]);
    }
  }
  // wordBox.innerHTML = fizzBuzz;
}

function my_increment() {
  currentValue++;
  number.innerHTML = currentValue;
  fizzBuzz(currentValue);
}

function my_decrement() {
  currentValue--;
  number.innerHTML = currentValue;
  fizzBuzz(currentValue);
}