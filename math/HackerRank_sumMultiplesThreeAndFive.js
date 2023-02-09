// https://www.hackerrank.com/contests/projecteuler/challenges/euler001/problem

function sumConsecutiveNumbers(N) {
    return BigInt(N) * (BigInt(N) + BigInt(1)) / BigInt(2);
}

function sumMultiplesThreeAndFive(N) {
    const maxNum = N - 1;

    const multiplesThreeCount = BigInt(Math.floor(maxNum / 3));
    const multiplesFiveCount = BigInt(Math.floor(maxNum / 5));
    const multiplesFifteenCount = BigInt(Math.floor(maxNum / 15));

    const sumMultiplesThree = sumConsecutiveNumbers(multiplesThreeCount) * BigInt(3);
    const sumMultiplesFive = sumConsecutiveNumbers(multiplesFiveCount) * BigInt(5);
    const sumMultiplesFifteen = sumConsecutiveNumbers(multiplesFifteenCount) * BigInt(15);

    return String(sumMultiplesThree + sumMultiplesFive - sumMultiplesFifteen);
}
