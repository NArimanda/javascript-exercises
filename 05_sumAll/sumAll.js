const sumAll = function(a,b) {
    let placeHolderSum = 0;
    for (let i=Math.min(a,b); i<=Math.max(a,b);i++){
        placeHolderSum+=i;
    }
    
    if (a<0 || b<0 || isNaN(a) || isNaN(b) || !(a === Number(a)) || !(b === Number(b))){
        return 'ERROR';
    }

    return placeHolderSum;
};

// Do not edit below this line
module.exports = sumAll;
