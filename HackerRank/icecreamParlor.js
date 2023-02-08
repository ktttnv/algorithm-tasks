// https://www.hackerrank.com/challenges/icecream-parlor/problem

function icecreamParlor(m, arr) {
    const costsSet = new Set();
    const costsIndexesMap = new Map();

    for (let ind = 0; ind < arr.length; ind++) {
        const curCost = arr[ind];

         if (costsSet.has(m - curCost)) {
            return [costsIndexesMap.get(m - curCost) + 1, ind + 1];
        } else {
            costsSet.add(curCost);
            costsIndexesMap.set(curCost, ind);
        }
    }
}
