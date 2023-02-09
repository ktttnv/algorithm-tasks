// https://www.hackerrank.com/challenges/missing-numbers/problem

function missingNumbers(arr, brr) {
    const numbersFrequency = new Map();

    arr.forEach(curNum => {
        if (numbersFrequency.has(curNum)) {
            numbersFrequency.get(curNum).mysteryArrayCount++;
        } else {
            numbersFrequency.set(curNum, {
                mysteryArrayCount: 1,
                originalArrayCount: 0,
            });
        }
    });

    brr.forEach(curNum => {
        if (numbersFrequency.has(curNum)) {
            numbersFrequency.get(curNum).originalArrayCount++;
        } else {
            numbersFrequency.set(curNum, {
                mysteryArrayCount: 0,
                originalArrayCount: 1,
            });
        }
    });

    const missingNumbers = [];

    for (let curNumFrequency of numbersFrequency) {
        if (curNumFrequency[1].mysteryArrayCount !==
            curNumFrequency[1].originalArrayCount) {
                missingNumbers.push(curNumFrequency[0]);
            }
    }

    return missingNumbers.sort((a, b) => a - b);
}

console.log(missingNumbers(
    [11, 4, 11, 7, 13, 4, 12, 11, 10, 14],
    [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12]
    )); // 3 7 8 10 12
