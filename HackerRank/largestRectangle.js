// command to run: node .\HackerRank\largestRectangle.js
// task: https://www.hackerrank.com/challenges/largest-rectangle/problem

function largestRectangle(h) {
    let max = 0;
    let buildingsRow = 0;

    const stack = [];

    h.forEach(curHeight => {
        while (isNotEmpty(stack) && pick(stack).height > curHeight) {
            const topStackElement = stack.pop();
            buildingsRow += topStackElement.row;

            const curSquare = topStackElement.height * buildingsRow;
            if (curSquare > max) {
                max = curSquare;
            }
        }

        stack.push({
            height: curHeight,
            row: buildingsRow + 1,
        });
        buildingsRow = 0;
    });

    while (isNotEmpty(stack)) {
        const topStackElement = stack.pop();
        buildingsRow += topStackElement.row;

        const curSquare = topStackElement.height * buildingsRow;
        if (curSquare > max) {
            max = curSquare;
        }
    }

    return max;
}

function isNotEmpty(arr) {
    return arr.length !== 0;
}

function pick(arr) {
    return arr[arr.length - 1];
}

const testCases = [
    [1, 2, 3], // 4 when we take buildings with heights 2, 3
    [3, 7, 8, 18, 6, 7, 2], // 30 when we take buildings with heights 7, 8, 18, 6, 7
    [7, 6, 5, 4, 5, 6, 7, 1, 100], // 100 when we take one building with height 100
    [7, 6, 5, 4, 5, 6, 7, 2], // 28 when we take buildings with height 7, 6, 5, 4, 5, 6, 7
];

testCases.forEach(testCase => {
    console.log('Buildings:', ...testCase, '-> Max square:', largestRectangle(testCase));
});
