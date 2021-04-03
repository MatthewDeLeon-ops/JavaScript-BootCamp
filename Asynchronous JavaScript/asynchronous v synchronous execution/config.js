// Asynchronous method \\

getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(puzzle);
  }
  // function called within function #callback
  // Read more on callback
});

/*

// Synchronous Method \\ -- A bad experience for Users accessing the website
const puzzle = getPuzzleSync();
console.log(puzzle);
console.log("do something else"); // Example of async. This piece of code runs and gets completed before the puzzle or error runs

// Fix later on the issue of the random word not showing up in console (puzzle)
*/