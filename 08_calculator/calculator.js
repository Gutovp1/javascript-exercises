const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arrays) {
  if (!arrays.length)
    return 0;
  const total = arrays.reduce((pSum, arr) =>(pSum + arr),0);    
  return total;
};

const multiply = function(arrays) {
  if (!arrays.length)
    return 0;
  const result = arrays.reduce((pProd, arr) => pProd*arr,1);
  return result;
};

const power = function(a,b) {
  return Math.pow(a,b);	
};

const factorial = function(a) {
	let result=1;
  if(a==0)
    return 1;
  else{
    for (i=0;i<a;i++){
      result = result*(a-i); 
    }
  return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
