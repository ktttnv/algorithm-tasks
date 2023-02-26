// https://www.hackerrank.com/challenges/two-strings/problem

function twoStrings(s1, s2) {
    let mySet = new Set();
    for (let i = 0; i < s1.length; i++) {
        mySet.add(s1[i]);
    }
    for (let i = 0; i < s2.length; i++) {
        if (mySet.has(s2[i])) {
            return "YES";
        }
    }

    return "NO";
}
