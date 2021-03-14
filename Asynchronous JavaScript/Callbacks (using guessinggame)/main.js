// Disable new guesses unless "playing" -- IP
// setup a new method to get back a status message. todo
// playing -> guesses left: 3 TODO
// failed -> nice try! the word was dog -- Completed
// finished -> Great work! you guessed the word. -- completed

const Guesstheword = function (word, attemptsleft) {
  this.word = word.toLowerCase().split("");
  this.attemptsleft = attemptsleft;
  this.charactersguessed = [];
  this.status = "Game in progress";
  // && this.attemptsleft
};

Guesstheword.prototype.currentstatusreport = function () {
  const charactersUnguessed = this.word.filter((character) => {
    return !this.charactersguessed.includes(character);
  });

  const finished = charactersUnguessed.length === 0;

  if (this.attemptsleft === 0) {
    this.status = "failed";
  } else if (finished) {
    this.status = "completed";
  } else {
    this.status = "Game in progress";
  }
};

Guesstheword.prototype.guessingstatus = function () {
  if (this.status === "New Game Started") {
    return `Remaining attempts left: ${this.attemptsleft}`;
  } else if (this.status === "failed") {
    return `failed, the word was "${this.word.join(
      ""
    )}". please refresh the browser to restart the game with a new word setup by the game admin`;
  } else {
    if (this.status === "completed")
      return "Wow!! You managed to guess the word ... son of bitch";
  }
};

Guesstheword.prototype.challenge = function () {
  let components = "";
  this.word.forEach((character) => {
    if (this.charactersguessed.includes(character) || character === "") {
      components += character;
    } else {
      components += "*";
    }
  });
  return components;
};

Guesstheword.prototype.makeanattempt = function (guess) {
  guess = guess.toLowerCase();
  const isspecial = !this.charactersguessed.includes(guess);
  const badattempt = !this.word.includes(guess);

  // Condition  to disable new guesses unless "the status is playing"
  if (this.status !== "Game in progress") {
    return;
  }

  // Removes the hidden character when a letter is correctly guessed
  if (isspecial) {
    this.charactersguessed.push(guess);
  }

  // Decreases the guessing limit counter when a invalid guess is made
  if (isspecial && badattempt) {
    this.attemptsleft = this.attemptsleft - 1;
  }

  this.currentstatusreport();
  //generates the report which is update by each guess made
};
