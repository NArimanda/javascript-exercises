const findTheOldest = function(arr) {
    let greatestAge =0;
    let oldestPerson = new Object();

    for (obj in arr){
        let dob = obj['yearOfBirth'];
        let death = obj['yearOfDeath'];
        if (death == undefined){ 
            death =2024 
        } else{
            death = obj['yearOfDeath']
        }

        let age=death-dob;

        if (age>greatestAge){ 
            greatestAge = age;
            oldestPerson = obj;
            return obj;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
