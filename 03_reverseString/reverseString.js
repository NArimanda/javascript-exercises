const reverseString = function(inpt) {
    let Array = inpt.split('');
    Array.at(-1);
    let placeholderArray =[];

    for(let i=1; i<=Array.length; i++){
        placeholderArray[i-1] = Array.at(-i)
    }
    return placeholderArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
