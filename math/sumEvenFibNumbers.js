// https://www.hackerrank.com/contests/projecteuler/challenges/euler002/problem

function sumEvenFibNumbers(max) {
    let sum = 0n;

    let a = 1n;
    let b = 2n;

    while (b <= BigInt(max)) {
        if (b % 2n === 0n) {
            sum += b;
        }

        const c = a + b;
        a = b;
        b = c;
    }

    return String(sum);
}
