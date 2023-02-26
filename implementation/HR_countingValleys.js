// https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(steps, path) {
    let valleysCount = 0;
    let height = 0;

    for (let i = 0; i < path.length; i++) {
        if (path[i] == 'U') {
            height = height + 1;
        }

        if (path[i] == 'D') {
            height = height - 1;
        }

        if (height == 0 && path[i] == 'U') {
            valleysCount = valleysCount + 1;
        }
    }

    return valleysCount;
}
