// https://www.hackerrank.com/challenges/frequency-queries/problem

function freqQuery(queries) {
    const numbers = new Map();
    const frequencyCount = new Map();

    function increaseFrequency(countOfNums) {
        if (frequencyCount.has(countOfNums)) {
            const numsOfCount = frequencyCount.get(countOfNums);
            frequencyCount.set(countOfNums, numsOfCount + 1);
        } else {
            frequencyCount.set(countOfNums, 1);
        }
    }

    function decreaseFrequency(countOfNums) {
        const numsOfCount = frequencyCount.get(countOfNums);

        if (numsOfCount === 1) {
            frequencyCount.delete(countOfNums);
        } else {
            frequencyCount.set(countOfNums, numsOfCount - 1);
        }
    }

    function insertNumber(num) {
        if (!numbers.has(num)) {
            numbers.set(num, 1);

            increaseFrequency(1);

            return;
        }

        const countOfNums = numbers.get(num);
        numbers.set(num, countOfNums + 1);

        increaseFrequency(countOfNums + 1);
        decreaseFrequency(countOfNums);
    }

    function deleteNumber(num) {
        if (!numbers.has(num)) {
            return;
        }

        const countOfNums = numbers.get(num);

        if (countOfNums === 1) {
            numbers.delete(num);
        } else {
            numbers.set(num, countOfNums - 1);
            increaseFrequency(countOfNums - 1);
        }

        decreaseFrequency(countOfNums);
    }

    function hasNumsOfCount(numsOfCount) {
        if (frequencyCount.has(numsOfCount)) {
            return 1;
        }

        return 0;
    }

    const output = [];

    queries.forEach(query => {
        if (query[0] === 1) {
            insertNumber(query[1]);
        } else if (query[0] === 2) {
            deleteNumber(query[1]);
        } else {
            output.push(hasNumsOfCount(query[1]));
        }
    });

    return output;
}
