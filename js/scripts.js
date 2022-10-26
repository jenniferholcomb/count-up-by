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
function multiplier(input1, input2) {
  let input = [input1, input2];
  let multOf = [];
  for (let index = 0; index <= input[0]; index += input[1]) {
    console.log(index);
    multOf.push(index);
  }
  return multOf;
}


// one to count/another to determine multiple
// Count to: 50
// Count by: 7
  // let input7 = [50, 7];
  // let multOfSeven = [];
  // for( let i = 0; i <= input7[0]; i += input7[1]){
  //   console.log(i);
  //   multOfSeven.push(i);
  // }

function handleFormSubmission(e){

  e.preventDefault();
  const inputNumber1 = parseInt(document.getElementById("input-value-1").value);
  console.log("inputNumber1: ", inputNumber1);
  const inputNumber2 = parseInt(document.getElementById("input-value-2").value);
  console.log("inputNumber2: ", inputNumber2);
  const numIncrement = multiplier(inputNumber1, inputNumber2);

  console.log("numIncrement: ", numIncrement);
}

window.addEventListener("load", function(){

  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});