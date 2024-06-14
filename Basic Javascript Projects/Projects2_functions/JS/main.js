function displaySum() {
  // Assignin two variables
  var num1 = 10;
  var num2 = 20;

  // Calculating the sum of the two variables
  var sum = num1 + num2;

  // Displaying the sum in the paragraph element with id 'result'
  document.getElementById('result').innerHTML = 'The sum is: ' + sum;
}

function concatenateString() {
  // Assignin a variable with initial text
  var text = "This is the initial text. ";

  // Using the += operator to concatenate a string
  text += "This is the concatenated string."

  // Displaying the concatenated string in the paragrapg element with id 'concatResult'
  document.getElementById('concatResult').innerHTML = text;
}