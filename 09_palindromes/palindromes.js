const palindromes = function (str1) {
    let str2 = str1.toLowerCase();
    str2=str2.replace(/!/g,"");// /g replaces all the matches
    str2=str2.replace(/,/g,"");
    str2=str2.replace(/\./g,"");
    str2=str2.replace(/ /g,"");
    let length = str2.length;
    for(i=length-1;i>=0;i--)
    {
        if (str2.charAt(length-1-i) !== str2.charAt(i) )
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
