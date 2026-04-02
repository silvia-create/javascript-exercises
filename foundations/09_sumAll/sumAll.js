const sumAll = function(a,b) {
    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0){
        return "ERROR";
    }
    let total = 0;
    for(let i = a; i <= b; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
