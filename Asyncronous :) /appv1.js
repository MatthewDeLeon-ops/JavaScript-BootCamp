// I want to initiate a request from my javascript program and do something with the response from my javascript file.
// make http request to get json back and then parse it into a javascript object to extract the data off of it.  The json that comes back contains a randomly generated word.


// Making an http request process using a constructor function provided by my browser
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  } else if (e.target.readyState == 4 && e.target.status == 400) {
    console.log("A 400 Error has occured");
  }
});
request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3");
request.send();

// XMLHttpRequest.open(method, url[, async[, user[, password]]])
// request.open: Sets the request method, request URL, and synchronous flag.
// request.send Initiates the request.

/// examples and notes
// HTTP (HyperText Transfer Protocol)
// request = what the developer wants the function to do
// response = What was done in response to the request. -- see responsetext
// when you enter a page by pasting a url. A url request is initiated.
// to view a request and page info access the web tools by clicking F12 in chrome. View the network section.
// httpstatuses.com look at
// http messages mozilla look at

////examples of get requests
// when you type a weblink in you are creating a get request (get http method)
