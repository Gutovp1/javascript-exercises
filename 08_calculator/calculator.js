const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arrays) {
  if (!arrays.length)
    return 0;
  return arrays.reduce((pSum, arr) =>(pSum + arr),0);    
  
};

const multiply = function(arrays) {
  if (!arrays.length)
    return 0;
  return arrays.reduce((pProd, arr) => pProd*arr,1);
  
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

// Another implementation of Factorial that uses recursion
const recursiveF = function(n) {
  if (n === 0) 
    return 1;
  return n * recursiveF (n-1);
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
  recursiveF
};
