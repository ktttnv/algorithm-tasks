// https://www.hackerrank.com/challenges/waiter/problem

function getPrimeNumbers() {
    // q <= 1200
    // 1200-th prime number is equal to 9733
    // so we will find all prime numbers less than 10_000

    const upperBound = 10_000;
    const isPrime = new Array(upperBound).fill(true);

    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i < isPrime.length; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < upperBound; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.flatMap((isPrime, number) => isPrime ? [number] : []);
}

function isNotEmpty(arr) {
    return arr.length !== 0;
}

function waiter(numbers, q) {
    numbers.reverse();

    let answers = [];
    let stackA = [];
    let stackB = [];

    const primeNumbers = getPrimeNumbers();

    for (let i = 0; i < q; i++) {
        while (isNotEmpty(numbers)) {
            const curNumber = numbers.pop();

            if (curNumber % primeNumbers[i] === 0) {
                stackB.push(curNumber);
            } else {
                stackA.push(curNumber);
            }
        }

        answers = answers.concat(stackB);

        numbers = [...stackA];

        stackA = [];
        stackB = [];
    }

    answers = answers.concat(numbers);

    return answers;
}
