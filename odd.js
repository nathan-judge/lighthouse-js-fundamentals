let num = ""

function isOdd(num) {
    if (num % 3 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("9 is odd: " + isOdd(9));
console.log("8 is odd: " + isOdd(8));