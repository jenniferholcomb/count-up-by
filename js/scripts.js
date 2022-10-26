/*
Create a program that takes two numbers — one to count to and another to determine what multiple to use to get there.

Here is some sample input:
Count to: 30
Count by: 5
Output: 5, 10, 15, 20, 25, 30

Count to: 50
Count by: 7
Output: 7, 14, 21, 28, 35, 42, 49

*/

// one to count/another to determine multiple
// Count to: 30
// Count by: 5

  let input = [30, 5];
  let multOfFive = [];
  for (let index = 0; index <= input[0]; index += 5) {
    console.log(index);
    multOfFive.push(index);
  }

// one to count/another to determine multiple
// Count to: 50
// Count by: 7
  let input7 = [50, 7];
  let multOfSeven = [];
  for( let i = 0; i <= input7[0]; i += input7[1]){
    console.log(i);
    multOfSeven.push(i);
  }

function handleFormSubmission(e){

  e.preventDefault();
  const inputNumber1 = document.getElementById("input-number-1").value;
  const inputNumber2 = document.getElementById("input-number-2").value;
}

window.addEventListener("load", function(){

  // const body = document.createElement("body");
  // const form = document.createElement("form");
  document.getQuerySelector("form#id-counter").addEventListener("submit", handleFormSubmission);
});