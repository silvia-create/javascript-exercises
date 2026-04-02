const sumAll = function(a,b) {
    let total = 0;
    if(!(a>0 && b>0 && a<b)){
        alert("Please enter 2 positive integers");
    }
    for(let i = a; i <= b; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
