// create new class for programmer type -- done
// track programmer proficiency in learning languages - done
// create programmer -- done
// create the ability to update proficiency that takes the amount to add or lower proficiency score -- good could be better
// override bio to print a passing or failing message. 2 or more languages pring proficient - todo in V2
// change grade to reflect status update -- DONE
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

class newprogrammer1 extends programmer {
    constructor(firstName, lastName, age, proficiency, language){
    super(firstName,lastName,age,language)
        this.proficiency = proficiency
    }
    updateproficiency(incrementalchange){
        this.proficiency += incrementalchange
    } 
    statusupdate() {
        const gradeupdate = this.proficiency
        // const status = this.proficiency >= 70 ? 'passing':'failing'
        if (gradeupdate >= 80){
        return "Your proficient in languages"
        }
        else {
            this.gradeupdate = 70 
            return "not proficient in languages"
            }
        }
    }
const programmer1 = new newprogrammer1 ("John", "Jobs", 23, 90, ["php","python"]);
// const programmer2 = new newprogrammer2 ("Miller", "Thompson", 23, ["R","Javascript"])
programmer1.updateproficiency(+2)
// programmer2.updateproficiency(+9)
console.log(programmer1)
console.log(programmer1.statusupdate())
// console.log(programmer1.getinformation())