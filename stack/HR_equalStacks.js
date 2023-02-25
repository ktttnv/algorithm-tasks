// https://www.hackerrank.com/challenges/equal-stacks/problem

function isEmpty(arr) {
    return arr.length === 0;
}

function sumNumbersInArray(arr) {
    return arr.reduce((sum, curNum) => sum + curNum, 0);
}

function areThreeNumbersEqual(num1, num2, num3) {
    return num1 === num2 && num2 === num3;
}

function equalStacks(h1, h2, h3) {
    h1.reverse();
    h2.reverse();
    h3.reverse();

    let sum1 = sumNumbersInArray(h1);
    let sum2 = sumNumbersInArray(h2);
    let sum3 = sumNumbersInArray(h3);

    while (!areThreeNumbersEqual(sum1, sum2, sum3)) {
        if (sum1 >= sum2 && sum1 >= sum3) {
            const picked = h1.pop();
            sum1 -= picked;
        } else if (sum2 >= sum3 && sum2 >= sum1) {
            const picked = h2.pop();
            sum2 -= picked;
        } else if (sum3 >= sum1 && sum3 >= sum2) {
            const picked = h3.pop();
            sum3 -=picked;
        }
    }

    return sum1;
}
