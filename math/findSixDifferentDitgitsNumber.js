// Find 6-digit number N (digits are different) so that 2*N, 3*N, 4*N, 5*N, 6*N have the same digits

function findNumbersN() {
    const numbersN = [];
    for (let num = 123456; num <= 987654; num++) {
        if (isDigitsDifferent(num) && isNumberN(num)) {
            numbersN.push(num);
        }
    }

    return numbersN;
}

const sortNumbersArray = (a, b) => a - b;
const numToSortedArray = num => String(num).split('').sort(sortNumbersArray);

function isDigitsDifferent(num) {
    const digits = numToSortedArray(num);

    for (let i = 0; i < 5; i++) {
        if (digits[i] === digits[i + 1]) return false;
    }

    return true;
}

function isSameDigits(num1, num2) {
    const digits1 = numToSortedArray(num1);
    const digits2 = numToSortedArray(num2);

    for (let i = 0; i < 6; i++) {
        if (digits1[i] !== digits2[i]) return false;
    }

    return true;
}

function isNumberN(num) {
    if (!isSameDigits(num, 2*num)) return false;
    if (!isSameDigits(num, 3*num)) return false;
    if (!isSameDigits(num, 4*num)) return false;
    if (!isSameDigits(num, 5*num)) return false;
    if (!isSameDigits(num, 6*num)) return false;

    return true;
}


const numbersN = findNumbersN();
console.log('Found', numbersN.length, 'number(s):', ...findNumbersN());
