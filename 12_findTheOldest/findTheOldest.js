const findTheOldest = (arrayObj) => {
    let today = new Date();
    today = today.getFullYear();
    const ordered = arrayObj.sort((a,b) => {
        if(!a.yearOfDeath)
            a.yearOfDeath = today;
        const older = a.yearOfDeath - a.yearOfBirth;
        if(!b.yearOfDeath)
            b.yearOfDeath = today;
        const younger = b.yearOfDeath - b.yearOfBirth;       
        return older > younger ? -1 : 1;
    });
    console.table(ordered);
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
