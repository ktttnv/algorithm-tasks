// https://www.hackerrank.com/contests/projecteuler/challenges/euler001/problem

function sumConsecutiveNumbers(N) {
    return BigInt(N) * (BigInt(N) + 1n) / 2n;
}

function sumMultiplesThreeAndFive(N) {
    const maxNum = N - 1;

    const multiplesThreeCount = BigInt(Math.floor(maxNum / 3));
    const multiplesFiveCount = BigInt(Math.floor(maxNum / 5));
    const multiplesFifteenCount = BigInt(Math.floor(maxNum / 15));

    const sumMultiplesThree = sumConsecutiveNumbers(multiplesThreeCount) * 3n;
    const sumMultiplesFive = sumConsecutiveNumbers(multiplesFiveCount) * 5n;
    const sumMultiplesFifteen = sumConsecutiveNumbers(multiplesFifteenCount) * 15n;

    return String(sumMultiplesThree + sumMultiplesFive - sumMultiplesFifteen);
}
