const fibonacci = function(index) {
    if(index <= 0)
        return 'OOPS';
    let fiboSum = new Array(index);
    fiboSum[0] = 1;
    fiboSum[1] = 1;
    for(i=2;i<index;i++)
    {    
        fiboSum[i] = fiboSum[i-1]+fiboSum[i-2];
    }
    return fiboSum[index-1];
};

// Do not edit below this line
module.exports = fibonacci;
