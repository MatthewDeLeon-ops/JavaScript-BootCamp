getPuzzle("2")
  .then((puzzle) => {
    console.log(puzzle);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

/* 
  
fetch("http://puzzle.mead.io/puzzle", {})
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("unable to grab the puzzle");
    }
  }).then((data) => {
    console.log(data.puzzle)
  }).catch((error) => {
    console.log(error);
  });

*/
