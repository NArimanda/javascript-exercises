const repeatString = function(str, num) {
    placeholderString = "";
    for(let i=0;i<num;i++){
        placeholderString+=str;
    };
    if (num<0){
        placeholderString='ERROR';
    }
    return placeholderString;
};

// Do not edit below this line
module.exports = repeatString;
