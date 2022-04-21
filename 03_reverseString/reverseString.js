const reverseString = function(text) {
    //text = 'augusto';
    let textAux = text;
    text= "";
    for (i=0;i<=textAux.length;i++){
        text += textAux.charAt(textAux.length-i);
    }
    return text;
    
};

// Do not edit below this line
module.exports = reverseString;
