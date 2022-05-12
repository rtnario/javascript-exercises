const findTheOldest = function(people) {
    return people.reduce((previousPerson, currentPerson) => {
        const previousPersonYearOfBirth = previousPerson.yearOfBirth;
        const currentPersonYearOfBirth = currentPerson.yearOfBirth;
        let previousPersonYearOfDeath = 0;
        let currentPersonYearOfDeath = 0;

        if (!previousPerson.hasOwnProperty("yearOfDeath")) {
            const today = new Date();
            previousPersonYearOfDeath = today.getFullYear();
        }

        else {
            previousPersonYearOfDeath = previousPerson.yearOfDeath;
        }

        if (!currentPerson.hasOwnProperty("yearOfDeath")) {
            const today = new Date();
            currentPersonYearOfDeath = today.getFullYear();
        }

        else {
            currentPersonYearOfDeath = currentPerson.yearOfDeath;
        }

        const previousPersonAge = previousPersonYearOfDeath - previousPersonYearOfBirth;
        const currentPersonAge = currentPersonYearOfDeath - currentPersonYearOfBirth;

        return previousPersonAge > currentPersonAge ? previousPerson : currentPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
