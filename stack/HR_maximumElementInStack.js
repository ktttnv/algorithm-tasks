// https://www.hackerrank.com/challenges/maximum-element/problem

function isEmpty(arr) {
    return arr.length === 0;
}

function pick(arr) {
    return arr[arr.length - 1];
}

function getMax(operations) {
    const results = [];
    const stack = [];

    for (let operation of operations) {
        const type = operation[0];
        if (type === '1') {
            const currentElement = operation.split(' ')[1];

            const maxElement = isEmpty(stack)
                ? currentElement
                : Math.max(currentElement, pick(stack).max);

            stack.push({
                element: currentElement,
                max: maxElement,
            });
        }

        if (type === '2') {
               stack.pop();
        }

        if (type === '3') {
            results.push(pick(stack).max);
        }
    }

    return results;
}
