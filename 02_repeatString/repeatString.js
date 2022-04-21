const repeatString = function(text, num) {
        let numStrings ="";
        if (num <0)
            return "ERROR";
        for (let i=0;i<num;i++)
            numStrings += text; 
        return numStrings;
        
};

// Do not edit below this line
module.exports = repeatString;
