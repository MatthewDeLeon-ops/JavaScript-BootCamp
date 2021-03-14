const componentsEL = document.querySelector("#components");
const guessEL = document.querySelector("#guess");
const Word1 = new Guesstheword("dog", 2);

componentsEL.textContent = Word1.challenge();
guessEL.textContent = Word1.guessingstatus();
console.log(Word1.status);

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  Word1.makeanattempt(guess);
  componentsEL.textContent = Word1.challenge();
  guessEL.textContent = Word1.guessingstatus();
  console.log(Word1.status);
});

const components = getPuzzle();
console.log(components);
/* 
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

*/
