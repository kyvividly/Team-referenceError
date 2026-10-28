/*
Research - Vincent H
  1) ReferenceError is when you try to use a variable that isn't defined
  2) The causes are undefined varibles, variables that wasn't defined through let or const
  3) Define a variable with let or const
  4) Check the name of the variable to make sure you defined it in your previous code

Example:
  input - console.log(`${variable}`)
  Output - *Script snippet #2:3 Uncaught ReferenceError: variableEasy is not defined at *Script snippet #2:3:16


Research - Ky
  1) ReferenceError is an error that occurs when a variable that doesn't exist nor has been initalized is being referenced (in console.log, etc)
  2) This error appears when you reference a variable but when checked the variable doesn't exist, thus the error message is returned back.
  3) Initalize the variable first (let or const, any works) before referencing it in other areas of your code.
  4) When you encounter the error, 
    check for if any variables in your code that you're using has been initalized, 
    if it is then check if whereever you refeneced the variable everything is typed and spelled correctly.

Example:
  Input: console.log(`${word}`)
  Output: referenceError:1 Uncaught ReferenceError: word is not defined at referenceError:1:16
/
