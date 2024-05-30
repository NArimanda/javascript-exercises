const palindromes = function (palindrome) {
    lowerCased = palindrome.toLowerCase();
    sliced = lowerCased.split("");

    placeholder =[];
    for(let i=0; i<sliced.length; i++){
        if (! (sliced[i]==' ' || sliced[i] == '!' || sliced[i] == ',' || sliced[i]=='.')){
            placeholder.push(sliced[i])
        }
    }

    if (placeholder.join('') == placeholder.reverse().join('')){
        return true;
    } else{return false;}
};

// Do not edit below this line
module.exports = palindromes;
