const removeFromArray = function(arrayArg, elements) {
    if(arrayArg.includes(elements))
        arrayArg.splice(arrayArg.indexOf(elements,1),1);   
    return arrayArg;
};


// Do not edit below this line
module.exports = removeFromArray;
