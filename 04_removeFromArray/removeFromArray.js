const removeFromArray = function(arrayArg, ...args) {
    let elements =   Array.from(args);
    for (i=0;i<=elements.length;i++)
    {
        if(arrayArg.includes(elements[i]))
            arrayArg.splice(arrayArg.indexOf(elements[i],0),1);
    }
    // elements.forEach(()=>{
    //  if(arrayArg.includes(elements))
    //         arrayArg.splice(arrayArg.indexOf(elements,0),1);
    // )};
     return arrayArg;
};


// Do not edit below this line
module.exports = removeFromArray;
