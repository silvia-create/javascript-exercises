const sumAll = function(a,b) {
    if(!(a>0 && b>0 && a<b)){
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
