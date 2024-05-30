const removeFromArray = function(array, ...args) {
    let newArray = [];

    for (item of array){
        if (!args.includes(item)){
            newArray.push(item)
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
