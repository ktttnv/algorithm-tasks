// https://www.hackerrank.com/challenges/game-of-two-stacks/problem

function twoStacks(maxSum, a, b) {
    let result;
    let sum = 0;

    let countNumbersA = 0;

    for (let i = 0; i < a.length; i++) {
        if (sum + a[i] > maxSum) {
            break;
        }

        sum += a[i];
        countNumbersA++;
    }

    result = countNumbersA;
    let countNumbersAB = countNumbersA;

    for (let i = 0; i < b.length; i++) {
        if (sum + b[i] > maxSum && countNumbersA === 0) break;

        sum += b[i];
        countNumbersAB++;

        if (sum > maxSum && countNumbersA > 0) {
            countNumbersA--;
            countNumbersAB--;
            sum -= a[countNumbersA];
        }
    }

    return Math.max(result, countNumbersAB);
}
