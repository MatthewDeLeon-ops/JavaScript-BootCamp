const componentsEL = document.querySelector("#components");
const guessEL = document.querySelector("#guess");
const Word1 = new Guesstheword("dog", 2);

componentsEL.textContent = Word1.challenge();
guessEL.textContent = Word1.guessingstatus();

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  Word1.makeanattempt(guess);
  componentsEL.textContent = Word1.challenge();
  guessEL.textContent = Word1.guessingstatus();
  console.log(Word1.status);
});

const components = getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(puzzle);
  }
  // function called within function #callback
  // Read more on callback
});
5