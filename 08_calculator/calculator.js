const add = function(...args) {
  let total=0;
	for (arg of args){
    total+=arg;
  }
  return total;
};

const subtract = function(a,b) {
	return Math.abs(a-b)
};

const sum = function(Arr) {
  let grandTotal =0;
	for (item of Arr){
    grandTotal +=item;
  }
  return grandTotal;
};

const multiply = function(...args) {
  let arrayDisplay =[];

  for (arg of args){
    for (item of arg){
      arrayDisplay.push(Number(item))
    };
  }

  let grandTotal = 1;
  for (let i=0; i<arrayDisplay.length; i++){
    if (i ==arrayDisplay.length){break}
    grandTotal *= arrayDisplay[i];
  }
  return grandTotal;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	if (n==0 || n==1){
    return 1
  }
  grandTotal =1;
  for (let i=1; i<=n;i++){
    grandTotal*=i
  }
  return grandTotal;
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
