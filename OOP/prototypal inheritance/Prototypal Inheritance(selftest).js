// create new class for programmer type -- done
// track programmer proficiency in learning languages
// create programmer -- done
// create the ability to update proficiency that takes the amount to add or lower proficiency score
// override bio to print a passing or failing message. 2 or more languages pring proficient
// change grade to reflect status update
// print status 

const programmer = function (firstName, lastName, age, language = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.languages = language;
};

programmer.prototype.getinformation = function () {
    this.language.forEach((language) => {
        bio += `${this.firstName} knows ${language}`
    });
};

programmer.prototype.setName = function(completeName) {
    const name = completeName.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
};

class newprogrammer extends programmer {
    constructor(firstName, lastName, age, language){
    super(firstName,lastName,age,language)}
}
class newprogrammer2 extends programmer {
    constructor(firstName, lastName, age, language,){
    super(firstName,lastName,age,language)
        this.proficiency = proficiency
    }
    updateproficiency(incrementalchange){
        this.proficiency += incrementalchange
    }
}
const programmer1 = new newprogrammer ("John", "Jobs", 23, ["php","python"]);
const programmer2 = new newprogrammer2 ("Miller", "Thompson", 23, ["R","Javascript"])
console.log(programmer1)
console.log(programmer2)
