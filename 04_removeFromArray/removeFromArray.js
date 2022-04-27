const removeFromArray = function(arr, ...remove) {
    for (let i = 0; i < remove.length; i++) {
        arr = arr.filter(item => item !== remove[i]);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
