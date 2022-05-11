const palindromes = function (string) {
    const processedString = string.toLowerCase().replaceAll(/\W/g,"");

    let pivotCharIndex = 0;
    let firstHalf = "";
    let secondHalf = "";   

    if (processedString.length % 2 !== 0) {
        pivotCharIndex = (processedString.length - 1) / 2;
        firstHalf = processedString.slice(0, pivotCharIndex);
        secondHalf = processedString.slice(pivotCharIndex + 1, processedString.length)
                                    .split("")
                                    .reverse()
                                    .join("");
    } else {
        pivotCharIndex = (processedString.length) / 2;
        firstHalf = processedString.slice(0, pivotCharIndex);
        secondHalf = processedString.slice(pivotCharIndex, processedString.length)
                                    .split("")
                                    .reverse()
                                    .join("");
    }

    return firstHalf === secondHalf;
};

// Do not edit below this line
module.exports = palindromes;
