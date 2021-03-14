// I want to initiate a request from my javascript program and do something with the response from my javascript file.
// make http request to get json back and then parse it into a javascript object to extract the data off of it.  The json that comes back contains a randomly generated word.
const componentsEL = document.querySelector("#components");
const guessEL = document.querySelector("#guess");
const Word1 = new Guesstheword("dog", 2);

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charcode);
  Word1.makeanattempt(guess);
  componentsEL.textContext = Word1.challenge();
  guessEL.textContext = Word1.guessingstatus();
  console.log(Word1.status);
});
// componentsEL.textContent = Word1.challenge();

// Making an http request process using a constructor function provided by my browser
const request = new XMLHttpRequest();

request.addEventListener("readystatechange",(e) => {
    if (e.target.readyState === 4) {
      console.log(e.target);
    }
  })
  request.open("GET", "http://puzzle.mead.io/puzzle")
  request.send()

// XMLHttpRequest.open(method, url[, async[, user[, password]]])
// request.open: Sets the request method, request URL, and synchronous flag.
// request.send Initiates the request.



/// examples and notes
// HTTP (HyperText Transfer Protocol)
// request = what the developer wants the function to do
// response = What was done in response to the request.
// when you enter a page by pasting a url. A url request is initiated.
// to view a request and page info access the web tools by clicking F12 in chrome. View the network section.

////examples of get requests
// when you type a weblink in you are creating a get request (get http method)
