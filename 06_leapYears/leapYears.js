const leapYears = function(year) {
    defaultState = false;

    if (year%4 ==0){
        defaultState = true;
        if (year%100==0){
            defaultState = false;
            if (year%400 ==0){
                defaultState = true;
            }
        }
    }

    return defaultState;
};

// Do not edit below this line
module.exports = leapYears;
