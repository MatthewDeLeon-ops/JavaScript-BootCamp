///// Asynchronous method \\\\

const getPuzzle = (callback) => {
// expects a single argument which is the item fetched (puzzle)
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState == 4 || e.target.status == 400) {
      callback("An Error has occured", undefined);
    }
  });
  //   request.open("GET", "http://puzzle.mead.io/wordCount=3"); // shows error works
  request.open("GET", "http://puzzle.mead.io/puzzle"); // shows error works
  request.send();
};


/* 
// Synchronous Method \\
const request = new XMLHttpRequest();

const getPuzzleSync = () => {
  request.open("GET", "http://puzzle.mead.io/slow-puzzle?wordCount=5",false); // shows error works
  request.send();
};

if (request.readyState === 4 && request.status === 200) {
  const request = JSON.parse(request.responseText);
} else if (request.status === 400) {
  throw new Error("things didnt workout");
}
*/