// 1. setup new "status with initial value of playing" - done

// 2. Create method for recalculating status to playing, finished, or failed -- create new function and calculate the new value for status with categorization. - done

    // if failed the same status failed (used all guesses). -- done
    // if I've finished the game all of the letters exist in the guessed letters array -- hint for each
    //  if you havent failed or finish detect stat playing -- good

// 3. Call that method after guess is processed.
    // after step 2 I will determine whether the guess is a duplicate , etc recalculate guesses - done

// 4. use console.log to print the status.
    // start the game and see playing.
    // Make two incorrect guesses to see failed.
    // refresh the broswer and guess "c", "a", and "t" to see finished

    const Guesstheword = function(word, attemptsleft) {
        this.word = word.toLowerCase().split('')
        this.attemptsleft = attemptsleft
        this.charactersguessed = []
        this.status = 'playing'
    }
    
    Guesstheword.prototype.statusidentifier = function() {
    
    // Method 3
    // const finished = this.word.every((character) => {
    //     return this.charactersguessed.includes(character)
    // })
    
    
    
    // Method 1
    const charactersUnguessed = this.word.filter((character) => {
        return !this.charactersguessed.includes(character)
    })
    const finished = charactersUnguessed.length === 0
    
    // method 2 for part 4.
    //     let finished = true
    //     this.word.forEach((character) => {
    //         if (this.charactersguessed.includes(character)){
    //     } else {
    //         finished = false
    //     }
    // })
    
        if (this.attemptsleft === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    
    
    
    
    Guesstheword.prototype.fun1 = function() {
        let components = ''
        this.word.forEach((character) => {
        if (this.charactersguessed.includes(character) || character === '')
        {
        components += character
        } 
        else {
            components += '*'
        }
    })
        return components
    }
    
    Guesstheword.prototype.makeanattempt = function(guess) {
        guess = guess.toLowerCase()
        const isspecial = !this.charactersguessed.includes(guess) 
        const badattempt = !this.word.includes(guess)
    
        if (isspecial) {
            this.charactersguessed.push(guess)
        }
    
        if (isspecial && badattempt) {
            this.attemptsleft = this.attemptsleft -1
        }
        this.statusidentifier()
    }
    