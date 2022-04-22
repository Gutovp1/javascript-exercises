const leapYears = function(year) {
    let leapDay = new Date(year,1,29);
    if (leapDay.getMonth()==1)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = leapYears;
