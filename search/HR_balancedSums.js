// https://www.hackerrank.com/challenges/sherlock-and-array/problem

function balancedSums(arr) {
    const sum = [0];

    for (let i = 0; i < arr.length; i++) {
        sum.push(sum[i] + arr[i]);
    }

    const fullSum = sum[arr.length];

    for (let i = 1; i <= arr.length; i++) {
        if (sum[i - 1] === fullSum - sum[i]) {
            return 'YES';
        }
    }

    return 'NO';
}
